import express from "express";
import { create } from "express-handlebars";
import session from "express-session";

import { port } from "./utils/Helper.js";
import reservation from './controllers/reservation.js'
import admin from './controllers/admin.js'
import reservationList from './controllers/reservationList.js'

const app= express()

const hbs = create({})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')
app.set('views', './templates')

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

  app.use('/assets', express.static('assets'))

  app.use('/', reservation)

  app.use('/', admin)

  app.use('/', reservationList)


  app.listen(port)