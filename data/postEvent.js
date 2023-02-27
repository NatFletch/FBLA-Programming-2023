function postEvent(){
    const title = document.getElementById("post-title").value
    const location = document.getElementById("post-location").value
    const time = document.getElementById("post-time").value
    var description = document.getElementById("post-description").value
    const db_client = require('../modules/db_client')
    const dialogue = require('../modules/dialogue')
    const cache = require('../modules/cache')

    if(!title.trim().length || !location.trim().length || !time.trim().length){
        dialogue.alert('You forgot to add a title, location, or time (those are all required fields)', "warning")
    }

    if(!description.trim().length){
        description = "No description provided"
    }

    db_client.query('SELECT * FROM user_profiles WHERE Username=$1', [cache.getItem("logged_in")], (err, res) => {
        if(!err){

            if(res.rowCount === 0){
                return dialogue.alert('Must be logged in as a teacher to post events', 'info')
            }

            if(res.rows[1]["isteacher"] > 0){
                dialogue.alert('Successfully Posted', 'success')
                db_client.query("INSERT INTO events (Title, Location, Time, Description, Interested) VALUES ($1, $2, $3, $4, $5)" ,[title, location, time, description, 0])
            } else {
                dialogue.alert("You are not allowed to post events (must be a teacher)", "danger")
            }
        }
    })
}