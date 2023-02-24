require('jquery')(document).ready(function($){
    const title = $('#title')
    const location = $('#location')
    const time = $('#time')
    const description = $('#description')
    const divider = document.querySelector('#divider')
    const db_client = require('../data/db_client')
    var last = document.querySelector("#sample-event")
    var counter = 0;
    var events_list;

    db_client.query('SELECT * FROM events', (err, res) => {
        console.log(res.rows)
    })

    events_list.forEach(post => {
        console.log('a')
        if(counter === 0){
            counter += 1;
            console.log('b')
            title.html(post["title"])
            location.html(post["location"])
            time.html(post["time"])
            description.html(post["description"])
        }
    })
})