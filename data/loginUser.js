const { dialog } = require('electron')

function onLoginClick(){
    const db_client = require('../modules/db_client')
    const dialogue = require('../modules/dialogue')
    const cache = require('../modules/cache')
    const $ = require('jquery')
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value

    if(!username.trim().length || !password.trim().length){
        return console.log('Forgot something')
    }

    db_client.query("SELECT * FROM user_profiles WHERE Username=$1", [username], (err, res) => {
        if(password == res.rows[1]["password"]){
            cache.setItem("logged_in", username)
            dialogue.alert('Success logging in!', 'success')
            window.location.replace("../application/index.html")
            return
        } else {
            return dialogue.alert('Incorrect username or password', 'danger')
        }
    })

}