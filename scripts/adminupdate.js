const db_client = require('../modules/db_client')

// automtically clals this upon each page load
// if the user is an admin, it will display the admin button on the navbar
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