from flask import Blueprint, request, jsonify, send_file
from pprint import pprint

from werkzeug.utils import secure_filename
from src.utils.database import Database as db
from src.utils.tasks import runPrediction
from datetime import datetime
from src.config import *
import os
import pandas as pd


# Creating a blueprint instance
bp = Blueprint("routes", __name__)

"""
Routes
=======
> Give all jobs
> Information for a particular job_id
> For downloading the csv file
> For submitting job or uploading the video file

"""


@bp.route("/")
@bp.route("/zebra-fish-tracker")
def index():
    return "working"


@bp.route("/jobs", methods=["GET"])
def getAllJobs():
    data = []
    documents = db.find_all("Jobs", {})
    for document in documents:
        data.append(document)
    data = data[::-1]
    return jsonify(data)


@bp.route("/results", methods=["GET"])
def getAllResults():
    data = []
    documents = db.find_all("Results", {})
    for document in documents:
        data.append(document)
    data = data[::-1]
    return jsonify(data)


@bp.route("/jobs/<string:job_id>", methods=["GET"])
def getJobDetails(job_id):
    data = db.find_one("Jobs", {"job_id": job_id})
    return jsonify(data)


@bp.route("/results/<string:job_id>", methods=["GET"])
def getJobResults(job_id):
    data = db.find_one("Results", {"job_id": job_id})
    return jsonify(data)


@bp.route("/upload", methods=["POST"])
def submitJob():
    if request.method == 'POST':
        print("request.form: ", request.form)
        print("request.files: ", request.files)
        file = request.files['file']
        file_name = secure_filename(file.filename)

        # Saving the job to db
        present_time = datetime.now().strftime("%d-%m-%Y %H:%M")
        vid_id = f"{file_name}-{present_time}"
        job_details = {
            "id": vid_id,
            "file_name": file_name,
            "submitted_date": present_time,
            "status": "PENDING",
            "completion_date": "-",
        }

        # By doing this we will avoid overwritting issue if two file have the same name
        time = datetime.now().strftime("%d-%m-%Y-%H-%M-%S")
        extension = file_name.split(".")[-1]
        input_name = "".join(file_name.split(
            ".")[:-1]) + "_" + time + f".{extension}"
        file.save(f"src/UserInputs/{input_name}")
        # Pushing task to celery
        job = runPrediction.delay(input_name, vid_id)
        job_id = job.id

        job_details["job_id"] = job_id

        # Inserting the job_id
        db.insert("Jobs", job_details)
        return f"SUCCESSFULLY SUBMITTED JOB, job_id: {job_id}"
    return "METHOD NOT ALLOWED"


def createCSV(attributes_data, save_path):
    df = pd.DataFrame(attributes_data)
    df = df.T
    df.to_csv(save_path)


@bp.route("/download/<string:job_id>")
def downloadCSV(job_id):
    req_res = db.find_one("Results", {"job_id": job_id})
    project_name = req_res["project_name"]
    csv_path = f"../{FRONTEND_PATH}/{project_name}/exp/tracks.csv"
    createCSV(req_res, "src/Outputs/tracks.csv")
    pprint(req_res)
    # print("files: ", os.listdir(csv_path))
    return send_file(csv_path)
