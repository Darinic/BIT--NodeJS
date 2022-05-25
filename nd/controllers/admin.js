import express from "express"
import { url } from "../utils/helper.js"

const Router = express.Router()

const loginInfo = {
    login: 'admin@klinika.lt',
    password: 'daktaras_ai_skauda'
}

// Router.use(auth)

Router.get('/admin', (req, res) => {
    if(req.session.loggedin != undefined && req.session.loggedin) {
        // res.send('Pavyko prisijungti')
      res.redirect(url + '/reservation-list')
      return
    } 
  
    res.render('admin')
})

Router.post('/login-submit', (req,res) => {
    if(parseInt( Object.keys(req.body).length ) > 0) {
        if(
          req.body.username != '' &&
          req.body.password != '' &&
          req.body.username === loginInfo.login &&
          req.body.password === loginInfo.password
        ) {
          req.session.loggedin = true
        //   res.send('Pavyko prisijungti')
          res.redirect(url + '/reservation-list')
        } else {
          res.send('Neteisingi prisijungimo duomenys')
        }
    
      } else {
        res.redirect(url + '/admin') //Peradresavimas
      }
    
    })


export default Router
