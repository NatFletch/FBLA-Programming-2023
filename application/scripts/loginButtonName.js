require('jquery')(document).ready(function($){
    if(window.localStorage.getItem("logged_in")==null || window.localStorage.getItem("logged_in") == "none"){
        $('#login').html("Log In / Register")
    } else {
        $('#login').html("Log Out")
        $('#login').attr("href", 'javascript:void()')
        $('#login').attr("onclick", "logout()")
    }
})
