import express from "express"
import { url } from "../utils/helper.js"

const Router = express.Router()

const credentials = {
    login: 'vilius@bit.lt',
    password: '1234'
  }

  Router.get('/', (req, res) => {
    if(req.session.loggedin != undefined && req.session.loggedin) {
      res.redirect(url + '/clients')
      return
    } 
  
    res.render('login')
  })
  
  Router.post('/login-submit', (req, res) => {
    // req.query - tai kas yra perduodama adrese uz zenklo ?
    // req.params - tai kas yra perduodama uz kiekvieno slasho
    // req.body - tai kas yra perduodama post metodu
    // req.session - tai kas yra issaugota sausaineliuose
  
    if(parseInt( Object.keys(req.body).length ) > 0) {
      if(
        req.body.username != '' &&
        req.body.password != '' &&
        req.body.username === credentials.login &&
        req.body.password === credentials.password
      ) {
        req.session.loggedin = true
        res.redirect(url + '/clients')
      } else {
        res.send('Neteisingi prisijungimo duomenys')
      }
  
    } else {
      res.redirect(url) //Peradresavimas
    }
  
  })

  export default Router