import json
from UserHelper import User

class TeacherControls:
    def award_points(name, points):
        file = open("../logged_in.json", "r")
        file_data = json.load(file)
        
        m_teacher = User(file_data["name"])
        
        if not m_teacher.is_teacher():
            return print("User is not a teacher!")
        
        m_user = User(name)
        
        if not m_user.get_user_info:
            return print("User does not exist")
        
        m_user.get_user_info["points"] += points
        
    def set_points(name, points):
        file = open("../logged_in.json", "r")
        file_data = json.load(file)
        
        m_teacher = User(file_data["name"])
        
        if not m_teacher.is_teacher():
            return print("User is not a teacher!")
        
        m_user = User(name)
        
        if not m_user.get_user_info:
            return print("User does not exist")
        
        if points < 0:
            return print("Too many points are being subtracted (negative number error)")
        
        m_user.get_user_info["points"] = points
        
    def subtract_points(name, points):
        file = open("../logged_in.json", "r")
        file_data = json.load(file)
        
        m_teacher = User(file_data["name"])
        
        if not m_teacher.is_teacher():
            return print("User is not a teacher!")
        
        m_user = User(name)
        
        if not m_user.get_user_info:
            return print("User does not exist")
        
        if (m_user["points"] - points) < 0:
            return print("Too many points are being subtracted (negative number error)")
        
        m_user.get_user_info["points"] -= points