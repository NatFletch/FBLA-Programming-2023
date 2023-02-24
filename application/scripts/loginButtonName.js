require('jquery')(document).ready(function($){
    if(window.localStorage.getItem("logged_in")==null){
        $('#login').html("Log In / Register")
    } else {
        $('#login').html(window.localStorage.getItem("logged_in"))
        $('#login').attr("href", '../application/profile.html')
    }
})
