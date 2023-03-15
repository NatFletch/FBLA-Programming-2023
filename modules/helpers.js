module.exports = {
    getUserProfile: (username) => {
        const cache = require('./cache')
        const db_client = require('./db_client')


        db_client.query("SELECT * FROM user_profiles WHERE Username = $1", [username], (err, res) => {
            if(!err){
                if(res.rows === null){
                    return;
                }
                return res.rows[0]
            } else {
                throw err;
            }
        })
    },

    update_events: (events_list) => {
        const $ = require('jquery')
        const cache = require('./cache')
        const helpers = require('./helpers')
        const title = $('#title')
        const location = $('#location')
        const time = $('#time')
        const description = $('#description')
        const divider = document.querySelector('#divider')
        var last = document.querySelector("#sample-event")
        var event_clone;
        var divider_clone;
        var counter = 0;

        if(events_list === undefined){
            document.querySelector("#loading-header").innerHTML = "No events planned at the moment."
        }

        events_list.forEach(post => {
            if(counter === 0){
                if(post["title"] != null){
                    document.querySelector("#loading-text").style.display = "none"

                    if (cache.getItem("isTeacher")>=1){
                        document.querySelector("#delete-post-button").style.display = "block"
                        document.querySelector("#delete-post-button").style.transform = 'translateY(-50%)';
                        document.querySelector("#new-post").style.display = "block"
                    }
                    last.style.display = "block"
                    counter += 1;
                    title.html(post["title"])
                    location.html("Location: " + post["location"])
                    time.html("Time: " + post["time"])
                    description.html("Description: " + post["description"])
                }
            } else {
                if(post["title"] != null){
                    document.querySelector("#loading-text").style.display = "none"
                    last.style.display = "block"
                    counter += 1
                    event_clone = last.cloneNode(true)
                    event_clone.id = "sample-event"+counter
                    divider_clone = divider.cloneNode(true)
                    last.after(divider_clone)
                    divider_clone.after(event_clone)

                    event_clone.querySelector("#title").innerHTML = post["title"]
                    event_clone.querySelector("#location").innerHTML = "Location: " + post["location"]
                    event_clone.querySelector("#time").innerHTML = "Time: " + post["time"]
                    event_clone.querySelector("#description").innerHTML = "Description: " + post["description"]
                    last = event_clone
                }
            }
        })
    }
}