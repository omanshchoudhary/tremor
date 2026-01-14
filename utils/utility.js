function getMaxID(taskArray){
    let maxi = 0;
    for(let task of taskArray){
        if(task.id > maxi) maxi = task.id;
    }
    return maxi;
}

module.exports ={
    getMaxID
}