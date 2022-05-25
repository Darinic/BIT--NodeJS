import express from "express"
import { url } from "../utils/helper.js"
import auth from "../auth/auth.js"
import fs from 'fs/promises'

const Router = express.Router()

Router.use(auth)

Router.get('/reservation-list', async (req, res) => {
    let parsedJson = false;
    let message = "";

    try {
        const data = await fs.readFile("./database.json", "utf8");
  
        parsedJson = JSON.parse(data);
      } catch {
        message = "Nera jokių rezervacijų";
      }
    res.render("reservationList", {parsedJson, message})
})

Router.delete('/delete-reservation/:id', async (req, res) => {
    const id = req.params.id 
  
    if(!id) {
      res.json({status: 'failed', message: 'Neperduotas joks id'})
      return 
    }
  
    try {
  
      const data = await fs.readFile('./database.json', 'utf8')
  
      let parsedJson = JSON.parse(data)
  
      parsedJson.splice(id, 1)
  
      //Informacijos issaugojimas faile
  
      await fs.writeFile('./database.json', JSON.stringify(parsedJson))
  
      res.json({status: 'ok', message: 'Įrašas sėkmingai ištrintas'})
  
    } catch {
        res.json({status: 'failed', message: 'Nepavyko perskaityti duomenu bazes failo'})
    }
})

export default Router