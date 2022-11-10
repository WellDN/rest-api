import sqlite3 from 'sqlite3'

const DBSOURCE = 'db.sqlite'

const SQL_ITENS_CREATE = `
    CREATE TABLE ITEMS (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        description TEXT
    )`
    export const database = new sqlite3.Database(DBSOURCE, (err) => {
        if (err) {
            console.error(err.message)
            throw err
        } else {
            console.log('Database connected sucefully.')
            database.run(SQL_ITENS_CREATE, (err) => {
                if (err) {
                    //Possible table created
                } else {
                    console.log('Table of items created sucefully')
                }
            })
        }
    })