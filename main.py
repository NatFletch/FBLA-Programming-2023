import tkinter
import json

from functools import partial
from classes.UserHelper import User
from classes.UserHelper import LoginManager

class Application:
    def __init__(self):
        self.window = tkinter.Tk()
        self.login_manager = LoginManager()
        
    def draw_login_window(self):
        name_var = tkinter.StringVar()
        pass_var = tkinter.StringVar()
        d_name_var = tkinter.StringVar()
        d_pass_var = tkinter.StringVar()
    
        login_window = self.window

        title_label = tkinter.Label(master=login_window, text="Login:")
        username_label = tkinter.Label(master=login_window, text="Username")
        username_entry = tkinter.Entry(master=login_window, textvariable=name_var, name="username")
        password_label = tkinter.Label(master=login_window, text="Password")
        password_entry = tkinter.Entry(master=login_window, textvariable=pass_var, name="password")

        login_button = tkinter.Button(master=login_window, text="Sign In", command=partial(
            self.login_manager.login_user, name_var.get(), pass_var.get()
        ))
        
        d_title_label = tkinter.Label(master=login_window, text="Register:")
        d_username_label = tkinter.Label(master=login_window, text="Username")
        d_username_entry = tkinter.Entry(master=login_window, textvariable=d_name_var, name="d_username")
        d_password_label = tkinter.Label(master=login_window, text="Password")
        d_password_entry = tkinter.Entry(master=login_window, textvariable=d_pass_var, name="d_password")

        register_button = tkinter.Button(master=login_window, text="Register", command=partial(
            self.login_manager.login_user, name_var.get(), pass_var.get()
        ))
        
        username_entry.focus()
        password_entry.focus()
        d_username_entry.focus()
        d_password_entry.focus()

        title_label.pack()
        username_label.pack()
        username_entry.pack()
        password_label.pack()
        password_entry.pack()
        login_button.pack()
        d_title_label.pack()
        d_username_label.pack()
        d_username_entry.pack()
        d_password_label.pack()
        d_password_entry.pack()
        register_button.pack()

        login_window.mainloop()
        

    def draw_main_window(self):
        logged_in_file = open("./logged_in.json", "r")
        logged_in_data = json.load(logged_in_file)
        
        window = tkinter.Toplevel(self.window)
        
        window.title("Attendance System")
        title_label = tkinter.Label(master=window, text = "Smithville Attendance Program")
        user_label = tkinter.Label(master=window, text=logged_in_data["name"])

        open_login = tkinter.Button(master=window, text="Log In", command=self.draw_login_window)
        open_register = tkinter.Button(master=window, text="Register Here", command=self.draw_register_window)

        title_label.pack()
        user_label.pack(side="top", fill="x")
        open_login.pack()
        open_register.pack()

        window.mainloop()
    

if __name__ == "__main__":
    m_application = Application()
    m_application.draw_login_window()