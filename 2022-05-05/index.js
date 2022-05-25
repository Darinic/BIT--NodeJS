import express from 'express'
import { create } from 'express-handlebars'
import session from 'express-session'

import login from './controllers/login.js'
import { port } from './utils/helper.js'
import clients from './controllers/clients.js'

//Express objekto inicijavimas
const app = express()
//Handlebars variklio sukurimas
const hbs = create({ /* config */ });
//Hardkodinti prisijungimo duomenys

//Bazinio adreso konstravimas

//Handlebars variklio prijungimas
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')
app.set('views', './templates')

//POST metodu perduodamu duomenu  
app.use( express.urlencoded({
  extended: false
}))

//Sesijos prijungimas ir konfiguracija
app.use( session({
  secret: 'authentification',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 86400000 //Laikas kiek galioja issaugotas sausainelis (cookie)
  }
}))

//Statiniu failu padavimas į konsolę
app.use('/assets', express.static('assets'))

//Login routeriu priskyrimas
app.use('/', login)

//Clients routerio priskyrimas
app.use('/', clients)


//Sukuria serveri priskiriant jam routerius
app.listen(port)
