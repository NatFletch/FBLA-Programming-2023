function registerClick(){
    const name = document.getElementById('desired-username').value
    const password = document.getElementById('desired-password').value
    const confirm_password = document.getElementById('desired-confirm-password').value

    if(!name.trim().length || !password.trim().length || !confirm_password.trim().length){
        return console.log('ah')
    }

    if(password != confirm_password){
        return console.log('Passwords do not match')
    }

    if(name.toLowerCase() == "none" || name.toLowerCase() == "testaccount" || name.toLowerCase() == "example"){
        return console.log('That username is not allowed. Please choose a different username')
    }
    addUserToDatabase(name, password, 0, 0)    
}

function addUserToDatabase(username, password, points, isTeacher){
    const sqlite = require('sqlite-sync')

    sqlite.connect('../database.sqlite')
    var total = sqlite.run('SELECT COUNT(*) FROM user_profiles')
    try{
        sqlite.run('INSERT INTO user_profiles (UserID, Username, Password, Points, isTeacher) VALUES ('+total+','+username+', '+password+','+points+','+isTeacher+')')
    }
    
    catch {
        console.log('something happened')
    }
}