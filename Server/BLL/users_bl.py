from pymongo import MongoClient
from bson import ObjectId
class PersonBL:
    def __init__(self):
        self.__client = MongoClient(port=27017)
        self.__db = self.__client["frempDB"]
        self.__collection = self.__db["users"]

    def get_all_persons(self):
       persons =  list(self.__collection.find({}))
       return persons
    
    def get_person(self, id):
      person =   self.__collection.find_one({"_id": ObjectId(id)})
      return person
    
    def add_person(self, obj):
       self.__collection.insert_one(obj)
       return str(obj["_id"])
    
    def update_person(self,id, obj):
       self.__collection.update_one({"_id": ObjectId(id)}, {"$set": obj})
       return "Updated!"
    
    def delete_person(self, id):
       self.__collection.delete_one({"_id": ObjectId(id)})
       return "Deleted!"
    