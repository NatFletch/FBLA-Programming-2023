require('jquery')(document).ready(function($){
    const db_client = require('../modules/db_client')
    const helpers = require('../modules/helpers')
    var events_list;

    db_client.query('SELECT * FROM events', (err, res) => {
        if(err){
            throw err;
        }
        events_list = res.rows
        helpers.update_events(events_list)
        updateCache()
    })

    function updateCache(){
        window.localStorage.setItem("events", events_list)
    }
})

function postEvent(){
    const title = document.getElementById("post-title").value
    const location = document.getElementById("post-location").value
    const time = document.getElementById("post-time").value
    var description = document.getElementById("post-description").value
    const db_client = require('../modules/db_client')
    const dialogue = require('../modules/dialogue')
    const cache = require('../modules/cache')
    const helpers = require('../modules/helpers')

    if(!title.trim().length || !location.trim().length || !time.trim().length){
        return dialogue.alert('You forgot to add a title, location, or time (those are all required fields)', "warning")
    }

    if(!description.trim().length){
        description = "No description provided"
    }

    db_client.query('SELECT * FROM user_profiles WHERE Username=$1', [cache.getItem("logged_in")], (err, res) => {
        if(!err){

            if(res.rowCount === 0){
                return dialogue.alert('Must be logged in as a teacher to post events', 'info')
            }

            if(res.rows[0]["isteacher"] > 0){
                dialogue.alert('Successfully Posted', 'success')
                db_client.query("INSERT INTO events (Title, Location, Time, Description, Interested) VALUES ($1, $2, $3, $4, $5)" ,[title, location, time, description, 0])
            } else {
                dialogue.alert("You are not allowed to post events (must be a teacher)", "danger")
            }
        }
    })
}

// TODO
function selectOnChange(){
    const fs = require('fs')
    const $ = require('jquery')
    const select = document.getElementById("#template-sel")
    const title = document.getElementById("#post-title")
    const location = document.getElementById("#post-location")
    const time = document.getElementById("#post-time")
    const description = document.getElementById("#post-description")

    var json_data;

    fs.readFile('./data/templates.json', "utf-8", (err, j_string) => {
        if(err){
            return console.log('something went horribly wrong reading this file: '+err)
        }
        json_data = JSON.parse(j_string)
    })

    console.log('fortntie')

}

function onDeleteClick(click){
    const helpers = require('../modules/helpers')
    const cache = require('../modules/cache')

    var user_data = helpers.getUserProfile(cache.getItem("logged_in"))

    if(user_data["isTeacher"] < 1){
        return;
    } else {
        // TODO: db_client.query("DELETE FROM user_profiles WHERE Title = $1", (click))
    }
}

function interestClicked(){
    const cache = require('../modules/cache')
    const db_client = require('../modules/db_client')

    var interestElement;
    var content;

    function updateInterested(){
        interestElement.innerHTML = content;
    }
    
    this.parentElement.childNodes.forEach(element => {
        if(element.nodeName == "interested"){
            interestElement = element
        }
    });
}

function selectPostDelete(element){
    const cache = require('../modules/db_client')
    cache.setItem("selectedEvent", element.parentNode)
}