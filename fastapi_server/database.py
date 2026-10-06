from pymongo import MongoClient
import os
from dotenv import load_dotenv
load_dotenv()
#connecting with our mongodb connection
client=MongoClient(os.getenv("MONGO_URL"))
#connect with our database
db=client["vignan_db"]
#connect with collection
student_collection=db["students"]
staff_collection=db["staff"]