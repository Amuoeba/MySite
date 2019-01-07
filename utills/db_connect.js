const sqlite3 = require('sqlite3').verbose();

class DataBase {
    constructor(path){
        this.path = path
        this.db = null
    }

    connect_db(){
        let db = new sqlite3.Database("./databases/users.db",sqlite3.OPEN_READWRITE, (err)=>{
            if(err){
                console.error(err.message)
            }
            console.log("Connected to the user database")
        })
        this.db = db        
    }

    db_readall(){
        if(this.db){
            let querry = `SELECT id as id,ip as ip,date as date FROM userlogins`
            this.db.serialize(()=>{
                this.db.each(querry,(err,row) =>{
                    if(err){
                        console.log(err.message)
                    }
                    console.log(row.id + "\t" +row.ip + "\t" + row.date)
                })
            })           
        }else{
            console.log("Database not connected")
        }
    }

    dissconect_db(){
        if(this.db){
            this.db.close((err)=>{
                if(err){
                    console.error(err.message)
                }else{
                    console.log("Database disconnected")
                }
            })
            this.db = null
        }else{
            console.log("Database not connected")
        }
    }


}

module.exports = {
    DB: DataBase
}