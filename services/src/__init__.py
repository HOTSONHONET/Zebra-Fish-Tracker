from celery import Celery
from src.config import *


# A display message when the app starts
print("[INFO] Keep Calm n Enjoy the drill...")


# Function to create celery
def make_celery(app_name=__name__):
    return Celery(
        app_name,
        broker=BROKER_URL,
        backend=BACKEND_URL
    )


celery = make_celery()
