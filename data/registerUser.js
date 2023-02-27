const dialogue = require('../modules/dialogue')

function registerClick(){
    const dialogue = require('../modules/dialogue')
    const name = document.getElementById('desired-username').value
    const password = document.getElementById('desired-password').value
    const confirm_password = document.getElementById('desired-confirm-password').value

    if(!name.trim().length || !password.trim().length || !confirm_password.trim().length){
        return dialogue.alert('All fields are required. Please fill out all the boxes', 'info')
    }

    if(password != confirm_password){
        return dialogue.alert('Passwords do not match', 'warning')
    }

    if(name.toLowerCase() == "none" || name.toLowerCase() == "testaccount" || name.toLowerCase() == "example" || name.toLowerCase() == "admin"){
        return dialogue.alert('That username is not allowed. Please choose a different username', 'warning')
    }

    if(db_client.query("SELECT * FROM user_profiles WHERE Username=$1", [username])){
        return dialogue.alert("Username already taken", 'danger')
    }
    addUserToDatabase(name, password, 0, 0)
}

function addUserToDatabase(username, password, points, teacher){
    const db_client = require('../modules/db_client')
    dialogue.alert('Successfully made account', 'success')
    db_client.query('INSERT INTO user_profiles (Username, Password, Points, isTeacher) VALUES ($1, $2, $3, $4)', [username, password, points, teacher])
    window.location.replace("../application/index.html")
    window.localStorage.setItem("logged_in", username)
}
