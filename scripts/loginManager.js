
function registerClick(){
    const dialogue = require('../modules/dialogue')
    const name = document.getElementById('desired-username').value
    const db_client = require('../modules/db_client')
    db_client.query("SELECT * FROM user_profiles WHERE Username=$1", [name], (err, res) => {
        if(res.rowCount != 0){
            userExist = true
            return dialogue.alert("Username is already taken!", 'danger')
        } else {
            registerClick2()
        }
    })
}

function registerClick2(){
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

    addUserToDatabase(name, fullname, password, 0, 0, bday, grade)
}

function onLoginClick(){
    const db_client = require('../modules/db_client')
    const dialogue = require('../modules/dialogue')
    const cache = require('../modules/cache')
    const $ = require('jquery')
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value

    if(!username.trim().length || !password.trim().length){
        return dialogue.alert('Please fill out both the username and password fields.', "info")
    }

    db_client.query("SELECT * FROM user_profiles WHERE Username=$1", [username], (err, res) => {
        if(res.rows[0] === undefined){
            return dialogue.alert("User does not exist!", "danger")
        }
        if(password == res.rows[0]["password"]){
            cache.setItem("logged_in", username)
            cache.setItem("isTeacher", res.rows[0]["isteacher"])
            dialogue.alert('Success logging in!', 'success')
            window.location.replace("../application/index.html")
            return
        } else {
            return dialogue.alert('Incorrect username or password', 'danger')
        }
    })

}

window.onload = function(){
    
    if(window.location.href.substr(window.location.href.lastIndexOf("/")+1) == 'login.html'){
        document.getElementById("username").onkeydown = function(e){
            if(e.keyCode == 13){
                onLoginClick()
            }
        }
        
        document.getElementById("password").onkeydown = function(e){
            if(e.keyCode == 13){
                onLoginClick()
            }
        }
    }
}

function logout(){
    const cache = require('../modules/cache')
    cache.setItem("logged_in", "none")
    cache.setItem('isTeacher', 0)
    window.location.reload()
}

function addUserToDatabase(username, name_full, password, points, teacher, birthday, grade){
    const db_client = require('../modules/db_client')
    const dialogue = require('../modules/dialogue')
    dialogue.alert('Successfully made account', 'success')
    db_client.query('INSERT INTO user_profiles VALUES ($1, $2, $3, $4, $5, $6, $7)', [username, name_full, password, points, teacher, birthday, grade])
    window.location.replace("../application/index.html")
    window.localStorage.setItem("logged_in", username)
    window.localStorage.setItem("isTeacher", 0)
}