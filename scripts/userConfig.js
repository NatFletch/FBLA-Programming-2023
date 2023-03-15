require("jquery")(document).ready(function($) {
    const cache = require('../modules/cache')

    function checkIfOwnPage(){
        const username = cache.getItem("logged_in")
        if(username === $("#username").html()){
            return true
        } else{
            return false;
        }
    }

    if(cache.getItem("isTeacher") > 0 || checkIfOwnPage()){
        document.getElementById("user-config").style.display = "block"
        document
    }
})