from flask import current_app as app, request, jsonify
from pprint import pprint


"""
Routes
=======
> Give all jobs
> Information for a particular job_id
> For downloading the csv file
> For submitting job or uploading the video file

"""


@app.route("/")
@app.route("/zebra-fish-tracker")
def index():
    return "working"


@app.route("/jobs")
def getAllJobs():
    pass


@app.route("/jobs/<string:job_id>")
def getAllJobs(job_id):
    pass


@app.route("/upload", methods=["POST"])
def submitJob():
    pass


@app.route("/download/<string:job_id>")
def downloadCSV():
    pass
