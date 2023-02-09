const fs = require('fs')
const $ = require('jQuery')

fs.readFile('./logged_in.json', 'utf8', (error, j_string) => {
    if(!error){
        const logged_in = JSON.parse(j_string)
        if(logged_in.name == "none"){
            $('#login').html("Log In / Register")
        }
    }
})