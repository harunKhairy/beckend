const mysql = require ('mysql');

const db = mysql.createConnection ({
    host:'localhost',
    user:'root',
    password:'Ha22091984',
    database:'final_project',
    port:'3306'
});

db.connect(error => {
    if (error) {
        console.log(error)
    } console.log('mySql Connected')
});

module.exports = db