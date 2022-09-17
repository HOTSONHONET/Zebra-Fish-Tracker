from src.factory import start_service
from src.celery_utils import init_celery
from src import celery

app = start_service()
init_celery(celery, app)
