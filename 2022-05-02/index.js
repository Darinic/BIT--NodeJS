import express from "express";
import fs from "fs/promises";
import { create } from "express-handlebars";
import { faker } from "@faker-js/faker";

const app = express();
const hbs = create({
  /* config */
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", "./templates");

// const randomName = faker.name.findName(); // Rowan Nikolaus
// const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
// const randomPhoneNumber = faker.phone.phoneNumber(); // (279) 329-8663 x30233
// const randomAvatar= faker.image.avatar();
// const randomCompany= faker.company.companyName()
// const randomCar = faker.vehicle.vehicle()
// const randomAddress = faker.address.city()

app.get("/", (req, res) => {
  res.render('login')
})

app.get("/vizitine", (req, res) => {
  let variables = {
    name: faker.name.findName(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),
    avatar: faker.image.avatar(),
    company: faker.company.companyName(),
    car: faker.vehicle.vehicle(),
    address: faker.address.city(),
  };
  res.render("vizitine", variables);
});

console.log("Sveikas");
// let masyvas = [];

app.get("/data", async (req, res) => {
  let masyvas = [];
  try {
    const data = await fs.readFile("./data.json", "utf8");
    let parsedJson = JSON.parse(data);
    masyvas = parsedJson;
    console.log(masyvas)
  } catch {
    console.log("nėra duomenų");
  }
  res.render("data", {masyvas});
});
app.listen(3000);
