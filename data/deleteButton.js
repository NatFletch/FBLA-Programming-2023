function onDeleteClick(click){
    const helpers = require('../modules/helpers')
    const cache = require('../modules/cache')

    var user_data = helpers.getUserProfile(cache.getItem("logged_in"))

    if(user_data["isTeacher"] < 1){
        return;
    } else {
        // TODO: db_client.query("DELETE FROM user_profiles WHERE Title = $1", (click))
    }
}