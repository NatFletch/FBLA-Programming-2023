module.exports = {
    update_events: (events_list) => {
        const $ = require('jquery')
        const cache = require('./cache')
        const title = $('#title')
        const location = $('#location')
        const time = $('#time')
        const description = $('#description')
        const divider = $('#divider')
        var last = $("#sample-event")
        var event_clone;
        var divider_clone;
        var counter = 0;
        var counter2;

        if(events_list === undefined){

        }

        events_list.forEach(post => {
            if(counter === 0){
                if(post["title"] != null){
                    last.css("display", "block")
                    counter += 1;
                    title.html(post["title"])
                    location.html("Location: " + post["location"])
                    time.html("Time: " + post["time"])
                    description.html("Description: " + post["description"])
                }
            } else {
                if(post["title"] != null){
                    last.css("display", "block")
                    counter2 = counter - 1;
                    counter += 1
                    event_clone = last.clone()
                    event_clone.attr("id", "sample_event"+counter)
                    divider_clone = divider.clone()
                    last.insertAfter(divider_clone)
                    divider_clone.insertAfter(event_clone)

                    if(counter2===0){
                        console.log('a')
                        $("#title").attr("id", "title"+counter)
                        $("#location").attr("id", "location"+counter)
                        $("#time").attr("id", "time"+counter)
                        $("#description").attr("id", "description"+counter)
                        $("#interested").attr("id", "interest"+counter)
                        $("#interested-button").attr("id", "interested-button"+counter)
                        $("#delete-post-button").attr("id", "delete-post-button"+counter)
                    } else {
                        console.log('b')
                        $("#title"+counter).attr("id", "title"+counter+1)
                        $("#location"+counter).attr("id", "location"+counter+1)
                        $("#time"+counter).attr("id", "time"+counter+1)
                        $("#description"+counter).attr("id", "description"+counter+1)
                        $("#interested"+counter).attr("id", "interest"+counter+1)
                        $("#interested-button"+counter).attr("id","interested-button"+counter+1)
                        $("#delete-post-button"+counter).attr("id", "delete-post-button"+counter+1)
                    }

                    $("#title"+counter).html(post["title"])
                    $("#location"+counter).html("Location: " + post["location"])
                    $("#time"+counter).html("Time: " + post["time"])
                    $("#description"+counter).html("Description: " + post["description"])
                    last = event_clone
                }
            }
        })
    }
}