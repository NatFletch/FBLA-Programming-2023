require('jquery')(document).ready(function($){
    const cache = require('../modules/cache')
    if(cache.getItem("logged_in")==null || cache.getItem("logged_in") == "none"){
        $('#login').html("Log In / Register")
        $("#profile").attr("href", "./login.html")
    } else {
        $('#login').html("Log Out")
        $('#login').attr("href", 'javascript:void()')
        $('#login').attr("onclick", "logout()")
    }
})
