from flask import Blueprint, request, jsonify
from pprint import pprint

from werkzeug.utils import secure_filename
from src.utils.database import Database as db
from src.utils.tasks import runPrediction
from datetime import datetime


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
    return jsonify(data)


@bp.route("/results", methods=["GET"])
def getAllResults():
    data = []
    documents = db.find_all("Results", {})
    for document in documents:
        data.append(document)
    return jsonify(data)


@bp.route("/jobs/<string:job_id>", methods=["GET"])
def getJobDetails(job_id):
    data = db.find_one("Jobs", {"job_id": job_id})
    return jsonify(data)


@bp.route("/upload", methods=["POST"])
def submitJob():
    if request.method == 'POST':
        file = request.files['file']
        file_name = secure_filename(file.filename)
        file.save(f"src/UserInputs/{file_name}")

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
        # Pushing task to celery
        job = runPrediction.delay(file_name, vid_id)
        job_id = job.id

        job_details["job_id"] = job_id

        # Inserting the job_id
        db.insert("Jobs", job_details)
        return "SUCCESSFULLY SUBMITTED JOB"
    return "METHOD NOT ALLOWED"


@bp.route("/download/<string:job_id>")
def downloadCSV():
    pass
