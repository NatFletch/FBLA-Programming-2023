function registerClick(){
    const name = document.getElementById('desired-username').value
    const password = document.getElementById('desired-password').value
    const confirm_password = document.getElementById('desired-confirm-password').value

    if(!name.trim().length || !password.trim().length || !confirm_password.trim().length){
        return console.log('ah')
    }

    if(password != confirm_password){
        return console.log('Passwords do not match')
    }

    if(name.toLowerCase() == "none" || name.toLowerCase() == "testaccount" || name.toLowerCase() == "example"){
        return console.log('That username is not allowed. Please choose a different username')
    }
    addUserToDatabase(name, password, 0, 0)    
}

function addUserToDatabase(username, password, points, teacher){
    //todo (switch to cockroach db)
}