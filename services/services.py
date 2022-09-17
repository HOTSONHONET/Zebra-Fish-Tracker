from src.factory import start_service
from warnings import filterwarnings


# For filtering out all warnings we will get when starting the application
filterwarnings("ignore")

if __name__ == "__main__":
    app = start_service()
    app.run(port=5000, debug=1)
