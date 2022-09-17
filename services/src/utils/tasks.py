from src import celery
import subprocess
import cv2
from src.utils.attributeExtractor import get_attributes
from src.utils.database import Database
from datetime import datetime
from src.utils.database import Database

Database.initialize()


def get_WH(file_name):
    vcap = cv2.VideoCapture(file_name)
    width = int(vcap.get(cv2.CAP_PROP_FRAME_WIDTH))   # float `width`
    height = int(vcap.get(cv2.CAP_PROP_FRAME_HEIGHT))
    return width, height


@celery.task(name="yolo_prediction")
def runPrediction(file_name: str, vid_id: str):
    project_name = " ".join(file_name.split(".")[:-1])
    video_name = file_name.split(".")[0]
    present_time = datetime.now().strftime("%d-%m-%Y-%H-%M")

    # Collecting width and height of the video file
    width, height = get_WH(f"src/UserInputs/{file_name}")

    # Commands to be executed
    yolo_cmd = f"cd ./src/Yolov5_DeepSort_Pytorch; python3 track.py --source ../UserInputs/{file_name} --yolo-weights weights/best.pt --save-txt --save-crop --save-vid --max-det 5 --augment --agnostic-nms --project ../Outputs/{project_name} --exist-ok"
    ffmpeg_cmd = f"ffmpeg -i src/Outputs/{project_name}/exp/{video_name}.mp4 -vcodec libx264 -f mp4 src/Outputs/{project_name}/exp/output_{present_time}.mp4"

    # Running Yolo tracker on the video
    yolo_process = subprocess.check_output(yolo_cmd, shell=True)

    # Converting the processed video into HTML showable
    ffmpeg_process = subprocess.check_output(ffmpeg_cmd, shell=True)

    # Collecting all the attributes from the video
    tracks_txt = f"src/Outputs/{project_name}/exp/tracks/{video_name}.txt"
    processed_info = get_attributes(tracks_txt, width, height)

    # Pushing the result into the database
    update_query = {"id": vid_id}
    updated_values = {"status": "COMPLETED", "completion_date": present_time}

    job_id = Database.find_one("Jobs", update_query)["job_id"]

    data = {
        "job_id": job_id,
        "id": vid_id,
        "attributes": processed_info
    }
    Database.update_one("Jobs", update_query, updated_values)
    Database.insert("Results", data)
