function postEvent(){
    const fs = require('fs')
    const $ = require('jQuery')
    const select = document.getElementById("template-sel")
    const title = document.getElementById("post-title")
    const location = document.getElementById("post-location")
    const time = document.getElementById("post-time")
    const description = document.getElementById("post-description")

    var j_string = fs.readFileSync('./data/events.json')
    var thedata = JSON.parse(j_string)
    var event = ("event"+(Object.keys(thedata).length+1))
    const json_template = {
        [event]: {
            "name": title.value,
            "time": time.value,
            "location": location.value,
            "description": description.value,
        }
    }
    console.log(json_template)
    console.log(thedata)
    new_data = Object.assign(thedata, json_template)
    console.log(new_data)
    const json_string = JSON.stringify(new_data)

    fs.writeFile('./data/events.json', json_string, (err) => {
        if (err){
            return console.log("Something went horribly wrong when trying to post your event: "+err)
        }
        return console.log('wrote it')
    })
}