/**
 * buttonSetup.js is used to set up the buttons on the navbar. It is used on every page.
 */
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

    const adminButton = document.getElementById('admin-button');
    if (cache.getItem("isTeacher") > 0) {
        adminButton.style.display = 'block'
    }
      
})
