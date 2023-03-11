function registerClick(){
    const dialogue = require('../modules/dialogue')
    const name = document.getElementById('desired-username').value
    const password = document.getElementById('desired-password').value
    const confirm_password = document.getElementById('desired-confirm-password').value
    const fullname = document.getElementById("fullname").value
    const grade = document.getElementById("grade-sel").options[document.getElementById("grade-sel").selectedIndex].text
    const bday = document.getElementById("birthday").value

    if(!fullname.trim().length){
        return dialogue.alert("Full name is required. Please fill out the full name box", 'info')
    } else if(!name.trim().length){
        return dialogue.alert('Username field is required. Please fill out all the boxes', 'info')
    } else if(!password.trim().length){
        return dialogue.alert('Password field is required. Please fill out all the boxes', 'info')
    } else if(!confirm_password.trim().length){
        return dialogue.alert('Confirm password field is required. Please fill out all the boxes', 'info')
    }

    if(password != confirm_password){
        return dialogue.alert('Passwords do not match', 'warning')
    }

    if(name.toLowerCase() == "none" || name.toLowerCase() == "testaccount" || name.toLowerCase() == "example" || name.toLowerCase() == "admin"){
        return dialogue.alert('That username is not allowed. Please choose a different username', 'warning')
    }

    if(db_client.query("SELECT * FROM user_profiles WHERE Username=$1", [name]) !== undefined){
        return dialogue.alert("Username already taken", 'danger')
    }
    addUserToDatabase(name, fullname, password, 0, 0, bday, grade)
}

function addUserToDatabase(username, name_full, password, points, teacher, birthday, grade){
    const db_client = require('../modules/db_client')
    dialogue.alert('Successfully made account', 'success')
    db_client.query('INSERT INTO user_profiles (Username, FullName, Password, Points, isTeacher, Birthday, Grade) VALUES ($1, $2, $3, $4, $5, $6, $7)', [username, name_full, password, points, teacher, birthday, grade])
    window.location.replace("../application/index.html")
    window.localStorage.setItem("logged_in", username)
    window.localStorage.setItem('isTeacher', 0)
}