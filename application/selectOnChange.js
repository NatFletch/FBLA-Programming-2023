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
