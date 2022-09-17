from sys import base_prefix
from flask import Flask
import os
from .celery_utils import init_celery
from src.utils.database import Database
from flask_cors import CORS

PKG_NAME = os.path.dirname(os.path.realpath(__file__)).split("/")[-1]


def start_service(app_name=PKG_NAME, **kwargs):
    app = Flask(app_name)
    CORS(app)
    if kwargs.get("celery"):
        init_celery(kwargs.get("celery"), app)

    from src.routes import bp
    app.register_blueprint(bp)

    # Initializing database
    Database.initialize()

    return app
