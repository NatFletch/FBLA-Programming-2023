import zerorpc
import gevent, signal
import classes.UserHelper as UserHelper

LoginManager = UserHelper.LoginManager()

class MyAPI:
    def login(username, password):
        LoginManager.login_user(username, password)
        
    def register(username, password):
        LoginManager.register_user(username, password)
        
    def log_out():
        LoginManager.log_out()
    
    
port = 8080
addr = 'tcp://127.0.0.1:' + port

s = zerorpc.Server(MyAPI())
s.bind(addr)
gevent.signal(signal.SIGTERM, s.stop)
gevent.signal(signal.SIGINT, s.stop)