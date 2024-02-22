import mysql from 'mysql';

import dotenv from 'dotenv';
dotenv.config();


export const mysqlDB = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
});


export function connect() {
    try {
        mysqlDB.connect(err => {
            if(err) {
                console.log("connect MySQL err");
                return
            }
            console.log("connect MySQL success");
        })
        
    }catch(err)  {
        console.log("connect MySQL err")
    }
}