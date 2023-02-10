const sqlite = require('sqlite-sync')

sqlite.connect('./database.sqlite')

sqlite.run("CREATE TABLE user_profiles (UserID int, Username text, Password text, Points int, isTeacher int)")