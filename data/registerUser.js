function registerClick(){
    const name = document.getElementById('desired-username').value
    const password = document.getElementById('desired-password').value
    const confirm_password = document.getElementById('desired-confirm-password').value

    if(!name.trim().length || !password.trim().length || !confirm_password.trim().length){
        return console.log('You forgot to enter something')
    }

    if(password != confirm_password){
        return console.log('Passwords do not match')
    }

    if(name.toLowerCase() == "none" || name.toLowerCase() == "testaccount" || name.toLowerCase() == "example"){
        return console.log('That username is not allowed. Please choose a different username')
    }

    if(db_client.query("SELECT * FROM user_profiles WHERE Username=$1", [username])){
        return console.log("Username already taken")
    }
    addUserToDatabase(name, password, 0, 0)
}

function addUserToDatabase(username, password, points, teacher){
    const db_client = require('../data/db_client')

    db_client.query('INSERT INTO user_profiles (Username, Password, Points, isTeacher) VALUES ($1, $2, $3, $4)', [username, password, points, teacher])
    window.location.replace("../application/index.html")
    window.localStorage.setItem("logged_in", username)
}