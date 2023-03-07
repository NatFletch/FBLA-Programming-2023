const { dialog } = require('electron')

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