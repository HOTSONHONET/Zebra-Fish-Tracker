from src.config import *
import pymongo


class Database(object):
    URI = DB_URI
    DATABASE = None

    @staticmethod
    def initialize():
        client = pymongo.MongoClient(Database.URI)
        Database.DATABASE = client[DB_NAME]
        print(f"[INFO] DB Connected at {Database.URI}/{Database.DATABASE}")

    @staticmethod
    def insert(collection, data):
        Database.DATABASE[collection].insert_one(data)

    @staticmethod
    def find_all(collection, query):
        return Database.DATABASE[collection].find(query, {"_id": 0})

    @staticmethod
    def find_one(collection, query):
        return Database.DATABASE[collection].find_one(query, {"_id": 0})

    @staticmethod
    def update_one(collection, query, newValues):
        return Database.DATABASE[collection].update_one(query, {"$set": newValues})
