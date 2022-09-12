from src import start_service

app = start_service()


if __name__ == "__main__":
    app.run(port=5000, debug=1)
