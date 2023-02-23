function postEvent(){
    const $ = require('jquery')
    const title = document.getElementById("post-title").value
    const location = document.getElementById("post-location").value
    const time = document.getElementById("post-time").value
    var description = document.getElementById("post-description").value
    const db_client = require('../data/db_client')
    var is_teacher;

    if(!title.trim().length || !location.trim().length || !time.trim().length){
        return console.log('Forgot something')
    }

    if(!description.trim().length){
        description = "No description provided"
    }

    db_client.query('SELECT * FROM user_profiles WHERE Username=$1', [window.localStorage.getItem("logged_in")], (err, res) => {
        if(!err){
            if(res.rows[1]["isteacher"] == 2){
                console.log('is a teacher')
                db_client.query("INSERT INTO events (Title, Location, Time, Description, Interested) VALUES ($1, $2, $3, $4, $5)" ,[title, location, time, description, 0])
            } else {
                console.log(res.rows[1]["isteacher"])
                console.log("Not a teacher")
            }
        }
    })
}