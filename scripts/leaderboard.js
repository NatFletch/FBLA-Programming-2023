/**
 * leaderboard.js is currently broken. It is supposed to display the leaderboard on the leaderboard page. 
 * Alas, it does not work. Will tackle this issue later >:)
 */

require('jquery')(document).ready(function($){
    const db_client = require('../modules/db_client')
    var counter = 1

    db_client.query("SELECT * FROM user_profiles ORDER BY Points DESC", (err, res) => {
        if(!err){
            var previous = document.getElementById('profile-card')

            for(profile in res.rows){
                if(counter===1){
                    const card = document.getElementById('profile-card')
                    card.querySelector("#name").innerHTML = "#" + counter + " " + res.rows[profile].fullname
                    card.querySelector("#grade").innerHTML = "Grade: " + res.rows[profile].grade
                    card.querySelector("#points").innerHTML = "Points: " + res.rows[profile].points
                    counter += 1
                } else {
                    const masterCard = document.getElementById('profile-card')
                    const card = masterCard.cloneNode(true)
                    const divider = document.getElementById('divider').cloneNode(true)
                    previous.after(divider)
                    divider.after(card)

                    card.querySelector("#name").innerHTML = "#" + counter + " " + res.rows[profile].fullname
                    card.querySelector("#grade").innerHTML = "Grade: " + res.rows[profile].grade
                    card.querySelector("#points").innerHTML = "Points: " + res.rows[profile].points
                    previous = card
                    counter += 1
                }
            }
        }
    })
})