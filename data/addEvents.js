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

