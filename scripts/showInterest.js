function interestClicked(){
    const cache = require('../modules/cache')
    const db_client = require('../modules/db_client')

    var interestElement;
    var content;

    function updateInterested(){
        interestElement.innerHTML = content;
    }
    
    this.parentElement.childNodes.forEach(element => {
        if(element.nodeName == "interested"){
            interestElement = element
        }
    });
}