function onLoginClick(){
    const fs = require('fs')
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value

    if(!username.trim().length || !password.trim().length){
        return console.log('AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH')
    }

    fs.readFile('./data/users/' + username + '.json', 'utf8', (error, json_string) => {
    if(!error){
        console.log("Success: ", json_string);
        const data = JSON.parse(json_string);

        const logged_in_string = {
            "name": data.name,
            "is_teacher": data.is_teacher
        }
        const logged_in_json = JSON.stringify(logged_in_string)

        if(password == data.password){
            fs.writeFile('./logged_in.json', logged_in_json, err => {
            if (err) {
                console.log('Error while writing file', err)
                return
            } else {
                console.log('Success logging in!')
                window.location.replace("./index.html")
                return
            }
        })
        return;
        }
    }
    
    console.log("Error while reading file: ", error)
});
}