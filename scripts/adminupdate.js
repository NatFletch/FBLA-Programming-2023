const db_client = require('../modules/db_client')

/**
 * checkAdmin() is called upon every page load. It checks if the user is an admin and if they are, it displays the admin button
 */
function checkAdmin() {
    const cache = require('../modules/cache')
    const dialogue = require('../modules/dialogue')
    const user = cache.get('user')
    if (user.isTeacher == 2) {
        document.getElementById('admin').style.display = 'block'
    }
    }
document.addEventListener('DOMContentLoaded', () => {
    const cache = require('../modules/cache')
    const dialogue = require('../modules/dialogue')
    const user = cache.get('user')
    if (user.isTeacher == 2) {
        document.querySelector('.admin-button').style.display = 'block'
    }
    })