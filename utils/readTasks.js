const { error, log } = require('console')
const fs = require('fs')

function readTask(){
    const response = fs.readFile('../data/tasks.json', 'utf-8', (err,result)=>{
        if(!err) return null;
        else return JSON.parse(result); 
    })

    console.log(response)
}