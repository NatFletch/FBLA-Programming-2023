import tkinter
import json
from classes.UserHelper import User
from classes.UserHelper import LoginManager

class Application:
    def draw_login_window(self):
        name_var = tkinter.StringVar()
        pass_var = tkinter.StringVar()

        login_window = tkinter.Tk()

        username_label = tkinter.Label(master=login_window, text="Username")
        username_entry = tkinter.Entry(master=login_window, textvariable=name_var, name="username")
        password_label = tkinter.Label(master=login_window, text="Password")
        password_entry = tkinter.Entry(master=login_window, textvariable=pass_var, name="password")

        password_button = tkinter.Button(master=login_window, text="Sign In", command=LoginManager().login_user(name_var, pass_var))

        username_label.pack()
        username_entry.pack()
        password_label.pack()
        password_entry.pack()
        password_button.pack()

        login_window.mainloop()

    def draw_main_window(self):
        logged_in_file = open("./logged_in.json", "r")
        logged_in_data = json.load(logged_in_file)
        window = tkinter.Tk()
        
        window.title("Attendance System")
        title_label = tkinter.Label(master=window, text = "Smithville Attendance Program")
        user_label = tkinter.Label(master=window, text=logged_in_data["name"])

        open_login = tkinter.Button(master=window, text="Log In", command=self.draw_login_window)

        title_label.pack()
        user_label.pack(side="top", fill="x")
        open_login.pack()

        window.mainloop()
    

if __name__ == "__main__":
    m_application = Application()
    m_application.draw_main_window()