import json
import os

class LoginManager():        
    def register_user(self, name, password):
        data_template = """
        {{
            name: {0},
            password: {1},
            points: 0,
            attended_events: 0,
            is_teacher: false
        }}
        """.format(name, password)

        if not name or password is None:
            return print("You forgot to add a name or a password")
        
        m_user = User(name)
        
        if m_user.get_user_info():
            return print("A user with this name already exists!")
        
        if name.lower() == "example" or "none":
            return print(f"{name} is not allowed!")
        
        user_file = open("./users/{0}".format(name.lower())+".json", "a")
        user_file.write(data_template)
        
        user_file.close()
        
        return print("Registered successfully!")
        
    def login_user(self, name=None, password=None):
        m_user = User(name)
        print(name)
        print(os.listdir("./"))
        if password == "":
            return print('You did not enter a username or a password')
        
        if name == "":
            return print('You did not enter a username or a password')
        
        if m_user.get_user_info() is False:
            return print("User not found")
        
        if m_user.get_user_password() != password:
            return print("Incorrect username or password")
        
        file = open("../logged_in.json", "r")
        file_data = json.load(file)
        file_data["name"] = name
        
        return print("Logged in successfully")
    
    def log_out():
        file = open("../logged_in.json", "r")
        file_data = json.load(file)
        file_data["name"] = "none"

class User:
    def __init__(self, name):
        self.name = name

    def get_user_info(self):
        print('trying')
        try:
            file = open(f"./users/{self.name}.json", "r")
            print('found file')
            file_data = json.load(file)
            file.close()
        except FileNotFoundError:
            return False
        
        return file_data
    
    def get_user_name(self):
        user = self.get_user_info()
        return user["name"]
    
    def get_user_password(self):
        user = self.get_user_info()
        return user["password"]
    
    def get_user_points(self):
        user = self.get_user_info()
        return user["points"]
    
    def get_user_attended_events(self):
        user = self.get_user_info()
        return user["attended_events"]
    
    def is_teacher(self):
        user = self.get_user_info()
        return user["is_teacher"]
