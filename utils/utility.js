const readTask = require('./readTask.js')

function getMaxID(){
    const data = JSON.parse(readTask.read());
    let maxi = 0;
    for(item of data){
        if(item.id > maxi) maxi = item.id;
    }
    return maxi;
}

module.exports ={
    getMaxID
}