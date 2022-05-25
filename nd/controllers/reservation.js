import express from "express";
import { url } from "../utils/Helper.js";
import fs from 'fs/promises'

const Router = express.Router()


Router.get('/', (req,res) => {
    res.render('reservation')
})
Router.post('/reservation-submit', async (req, res) => {
    console.log(req.body)
    if(parseInt(Object.keys(req.body).length ) > 0) {
        if(
        req.body.siuntimas != '' &&
        req.body.filial != '' &&
        req.body.date != '' &&
        req.body.time != '' &&
        req.body.vardas != '' &&
        req.body.pavarde != '' &&
        req.body.email != '' &&
        req.body.mobilus != '' &&
        req.body.sutikimas === 'on') {
            let json = [];

            try {
              const data = await fs.readFile("./database.json", "utf8");
        
              let parsedJson = JSON.parse(data);
        
              parsedJson.push(req.body);
        
              json = parsedJson;
            } catch {
              json.push(req.body);
        
              console.log("Duomenu bazes failas sukurtas");
            }
        
            //Informacijos issaugojimas faile
        
            await fs.writeFile("./database.json", JSON.stringify(json));
            
            res.send('Duomenys išsiųsti')
        }else {
            res.send('Duomenų trūksta')
        }
    } else {
        res.send('Nėra duomenų')
    }
})


export default Router