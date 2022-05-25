import { port } from "./helpers/config.js";
import db from './helpers/db.js'
//mysql2 modulio importavimas su promisais
import express from "express";
import { create } from "express-handlebars";
import multer from "multer";
import {rm} from 'fs/promises'

const app = express()
const handlebars = create()

const diskStorage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './uploads')
    },
    filename: (req, file, callback) => {
        const ext = file.originalname.split('.')

        callback(null, Date.now() + '.' + ext[1])
    }
})

const upload = multer({
    storage: diskStorage,
    fileFilter: (req, file, callback) => {
        //Atliekamas failu formato tikrinimas
        if(
            file.mimetype === 'image/jpeg' ||
            file.mimetype === 'image/png' ||
            file.mimetype === 'image/gif'
        ) {
            callback(null, true)
        } else {
            callback(null, false)
        }
    }
})

app.engine('handlebars', handlebars.engine)
app.set('view engine', 'handlebars')
app.set('views', './views')

app.use('/uploads', express.static('uploads'))

app.get('/', async (req, res) => {
    const photos = await db.query('SELECT * FROM pictures')
    console.log(photos)
    res.render('form', {photos: photos[0]})
})

app.post('/upload_file', upload.single('photo'), async (req, res) => {
    if(req.file === undefined) {
        res.send('Netinkamas failas')
    } else {
        let insert
        console.log(req.body)
        if(req.body.author !== '' && req.body.description !== ''){
            insert = await db.query(`INSERT INTO pictures (picture, author, description) VALUES ('${req.file.filename}','${req.body.author}','${req.body.description}')`)    
        } else if (req.body.author !== '' && req.body.description === ''){
            insert = await db.query(`INSERT INTO pictures (picture, author) VALUES ('${req.file.filename}','${req.body.author}')`)    
        }else if (req.body.description !== '' && req.body.author === ''){
            insert = await db.query(`INSERT INTO pictures (picture, description) VALUES ('${req.file.filename}','${req.body.description}')`)
        }else if(req.body.author === '' && req.body.description === ''){
            // console.log(req.file)
            insert = await db.query(`INSERT INTO pictures (picture) VALUES ('${req.file.filename}')`)
            // const insert = await db.query('INSERT INTO pictures (picture) VALUES (?)', req.file.filename)
        }
        if(insert[0].affectedRows === 1) {
            res.send('Failas gautas <a href="/">I titulini</a>')
        } else {
            await rm('./uploads/' + req.file.filename)
            res.send('Nepavyko ikelti failo i duomenu baze')
        }
    }
})


app.listen(port)
