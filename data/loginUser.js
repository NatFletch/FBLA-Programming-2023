function onLoginClick(){
    const db_client = require('../data/db_client')
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value

    if(!username.trim().length || !password.trim().length){
        return console.log('Forgot something')
    }

    db_client.query("SELECT * FROM user_profiles WHERE Username=$1", [username], (err, res) => {
        if(password == res.rows[1]["password"]){
            window.localStorage.setItem("logged_in", username)
            console.log('Success logging in!')
            window.location.replace("../application/index.html")
            return
        } else {
            return console.log("Incorrect username or password")
        }
    })
    
}