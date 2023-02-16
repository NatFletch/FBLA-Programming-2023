require('jquery')(document).ready(function($){
    const fs = require('fs')

    const title = $('#title')
    const location = $('#location')
    const time = $('#time')
    const description = $('#description')
    var last = document.querySelector("#sample-event")
    const divider = document.querySelector('#divider')

    fs.readFile('./data/events.json', 'utf8', (error, json_string) => {
        const data = JSON.parse(json_string)
        var num = 1
        Object.entries(data).forEach((entry) => {
            const [key, value] = entry;
            if(key == "event1"){
                title.html(value.name)
                location.html("Location: " + value.location)
                time.html("Time: " + value.time)
                description.html("Description: " + value.description)
            } else {
                num += 1
                const clone =  last.cloneNode(true);
                clone.id = "sample-event"+num
                const clone2 = divider.cloneNode(true)
                last.after(clone2)
                clone2.after(clone)

                $("#sample-event"+num+">#title").html(value.name)
                $("#sample-event"+num+">#location").html("Location: " + value.location)
                $("#sample-event"+num+">#time").html("Time: " + value.time)
                $("#sample-event"+num+">#description").html("Description: " + value.description)
                last = clone
            }
          });
    })
})