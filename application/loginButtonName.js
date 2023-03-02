require('jquery')(document).ready(function($){
    console.log(window.location.pathname+window.location.search)
    const cache = require('../modules/cache')
    if(cache.getItem("logged_in")==null || cache.getItem("logged_in") == "none"){
        $('#login').html("Log In / Register")
    } else {
        $('#login').html("Log Out")
        $('#login').attr("href", 'javascript:void()')
        $('#login').attr("onclick", "logout()")
    }
})
