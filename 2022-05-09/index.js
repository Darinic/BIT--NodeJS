import database from './helpers/config.js'
//mysql2 modulio importavimas su promisais
import mysql from 'mysql2/promise'

// mysql2 modulio importavimas su callbacku funkcija
//import mysql from 'mysql2'

const connection = await mysql.createConnection({
    host:database.database_host,
    user: database.user,
    database: database.database
})

//Visu duomenu paemimas is lenteles
const select = await connection.query("SELECT * FROM clients")

console.log(select[0])

//Nauju duomenu pridejimas naujantis promisais
const insert = await connection.query("INSERT INTO clients (company_name) VALUES('UAB Maxima')")
const lastInsertId = insert[0].insertId
//Duomenu atnaujinimas

//Atvirkscias slash'as (\) sukuria tokiu paciu kabuciu kaip ir js sintakseje naudojimo galimybe
//panaudojant escape funkcionaluma
const update = await connection.query("UPDATE clients SET company_name = 'UAB RIMI' WHERE id = " + lastInsertId)
// console.log(update)

//duomenu istrynimas
//Klaustukas reiskia, kad toje pozicijoje turetu buti idedamas kintamasis is antro parametro perduoto 
const remove = await connection.query("DELETE FROM clients WHERE id = ?", lastInsertId)

// console.log(remove)

// connection.query('SELECT * FROM clients WHERE id > 1', (err, results, fields) => {
//     if(err) {
//     console.log(err)
//     return
//     }

//     console.log(results)
//     // console.log(fields)
// })

console.log('Started')