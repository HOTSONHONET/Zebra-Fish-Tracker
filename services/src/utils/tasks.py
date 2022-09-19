from src import celery
import subprocess
import cv2
from src.utils.attributeExtractor import get_attributes
from src.utils.database import Database
from datetime import datetime
from src.utils.database import Database
import pandas as pd
import os
from src.config import *

Database.initialize()


def get_WH(file_name):
    vcap = cv2.VideoCapture(file_name)
    width = int(vcap.get(cv2.CAP_PROP_FRAME_WIDTH))   # float `width`
    height = int(vcap.get(cv2.CAP_PROP_FRAME_HEIGHT))
    return width, height


def createCSV(attributes_data, save_path):
    df = pd.DataFrame(attributes_data)
    df = df.T
    df.to_csv(save_path)


@celery.task(name="yolo_prediction")
def runPrediction(file_name: str, vid_id: str):
    # print(os.listdir("../"))
    # If the Outputs folder doesnot exist in the fronend directory, the logic will create it
    if not os.path.exists(FRONTEND_PATH):
        os.mkdir(FRONTEND_PATH)

    project_name = " ".join(file_name.split(".")[:-1])
    video_name = file_name.split(".")[0]
    present_time = datetime.now().strftime("%d-%m-%Y-%H-%M-%S")

    project_name = project_name + "_" + present_time

    csv_path = f"{FRONTEND_PATH}/{project_name}/exp/tracks.csv"
    # Collecting width and height of the video file
    width, height = get_WH(f"src/UserInputs/{file_name}")

    # Commands to be executed
    yolo_cmd = f"cd ./src/Yolov5_DeepSort_Pytorch; python3 track.py --source ../UserInputs/{file_name} --yolo-weights weights/best.pt --save-txt --save-crop --save-vid --max-det 5 --augment --agnostic-nms --project ../../{FRONTEND_PATH}/{project_name} --exist-ok"
    ffmpeg_cmd = f"ffmpeg -i {FRONTEND_PATH}/{project_name}/exp/{video_name}.mp4 -vcodec libx264 -f mp4 {FRONTEND_PATH}/{project_name}/exp/output.mp4"

    # Running Yolo tracker on the video
    yolo_process = subprocess.check_output(yolo_cmd, shell=True)

    # Converting the processed video into HTML showable
    ffmpeg_process = subprocess.check_output(ffmpeg_cmd, shell=True)

    # Collecting all the attributes from the video
    tracks_txt = f"{FRONTEND_PATH}/{project_name}/exp/tracks/{video_name}.txt"
    processed_info = get_attributes(tracks_txt, width, height)

    # Pushing the result into the database
    update_query = {"id": vid_id}
    updated_values = {"status": "COMPLETED", "completion_date": present_time}

    job_id = Database.find_one("Jobs", update_query)["job_id"]

    images_names = {}
    print("PWD: ", os.getcwd())
    for fish_idx in os.listdir(f"{FRONTEND_PATH}/{project_name}/exp/crops/Zebrafish/"):
        fish_name = f"Fish_{fish_idx}"
        images_names[fish_name] = []
        for img_name in os.listdir(f"{FRONTEND_PATH}/{project_name}/exp/crops/Zebrafish/{fish_idx}"):
            images_names[fish_name].append(img_name)

    data = {
        "job_id": job_id,
        "id": vid_id,
        "attributes": processed_info,
        "project_name": project_name,
        "images_names": images_names,
    }

    # Creating csv file in the frontend server
    createCSV(processed_info, csv_path)

    Database.update_one("Jobs", update_query, updated_values)
    Database.insert("Results", data)
