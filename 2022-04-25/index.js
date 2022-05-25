import readline from "readline";
import process from "process";
import chalk from "chalk";

//Duomenu priemimo ir grąžinimo konsolėje interfeiso konfiguracija
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Vardo perdavimas ir grąžinimas
// rl.question('Įveskite savo vardą ', vardas => {
//     console.log('Jūsų vardas yra ' + vardas)
//     rl.close()
// })

// // Dauginimas
// rl.question('Įveskite skaičių nuo vieno iki dešimt ', digit => {
//     if(digit > 0 && digit <=10) {
//         let resp = ''
//     for(let i=1; i <=10; i++) {
//     resp += digit + ' x ' + i + ' = ' + (digit * i) + '\n'
//     }
//     console.log(resp)
// }else {
//         console.log('Įvestas neteisingas skaičius')
//     }
// rl.close()
// })

// rl.question('Įveskite savo vardą: ', vardas => {
//     rl.question('Įveskite pavardę: ', pavarde => {
//         console.log('Jūsų vardas ir pavardė yra \n' + vardas + ' ' + pavarde)
//     })
// })

//mano
// rl.question('Nuo: ', nuo => {
//     rl.question('Iki: ', iki => {
//         let values = []
//         let pound = 2.20462
//         let stone = 0.15473
//         for(let i=nuo; i <= iki; i++) {
//             values.push({
//                 'Kg.': i,
//                 'Pounds': (i * pound).toFixed(2),
//                 'Stone:': (i * stone).toFixed(2)
//             })
//             // console.table(`Kg. \t Pound \t Stone \n
//             // ${i} ${(i * pound)} ${(i * stone)}`)
//         }
//         console.table(values)
//         rl.close()
//     })
// }
// )

//destytojo

// rl.question('Įveskite skaičių nuo kiek kilogramų pradėsime konvertavimą: ', nuo => {
//     rl.question('Įveskite skaičių kiek rezultatų turi būti lentelėje: ', iki => {
//         let rezultatas = `${chalk.bgCyan.bold('kg.')}\t${chalk.bgCyan.bold('pounds')}\t${chalk.bgCyan.bold('stone')}\n`
//         let pound = 2.20462
//         let stone = 0.15473
//         for(let i = nuo; i<= iki; i++) {
//             let p = (i * pound).toFixed(2)
//             let s = (i * stone).toFixed(2)
//             rezultatas += `${chalk.blue(i)}\t${chalk.red(p)}\t${chalk.green(s)}\n`
//         }
//         console.log(rezultatas)

//         rl.close()
//     })
// })

//
// Terminale sukurkite prisijungimą prie programos.
// Paprašykite vartotojo įvesti prisijungimo vardą ir slaptažodį.
// Sutikrinkite duomenis ir grąžinkite žinutę pagal gautus parametrus. (Prisijungimas sėkmingas arba nepavyko)
// Teisingu atveju atvaizduokite žinutę žalia spalva, priešingu atveju raudona.
// Veikiančius prisijungimo duomenis aprašykite savo sukurtame objekte arba masyve.

// const users = [
//   {
//     login: "Igoris",
//     password: "Shustenko",
//   },
//   {
//     login: "Pavelas",
//     password: "abecele123",
//   },
//   {
//     login: "Andrius",
//     password: "slaptazodis",
//   },
// ];
// let sekmingas = false;

// rl.question("Login: ", (login) => {
//   rl.question("Password: ", (password) => {
//     users.filter((e) => {
//       if (e.login === login && e.password === password) {
//         sekmingas = true;
//       }
//     });
//     if(sekmingas) {
//       console.log(chalk.green("Prisijungimas sekmingas"));
//     } else {
//       console.log(chalk.red("Prisijungimas nesekmingas"));
//     }
//     rl.close()  
//   });
// });

let stringas1= ''
let stringas2= ''
let stringas3= ''

let rezultatas = `${stringas1} ${stringas2} ${stringas3} `

for(let i=1; i<=60; i++) {
    if(i % 20 == 0) {
        stringas1 += '* \n'
        stringas2 += '* \n'
        stringas3 += '* \n'
    }else {
        stringas1 += '*';
        stringas2 += '*';
        stringas3 += '*'
    }
}
console.log(chalk.yellow(stringas1) + chalk.green(stringas2) + chalk.red(stringas3));
// console.log(chalk.green(stringas2));
// console.log(chalk.red(stringas3))
// console.log(stringas1)
// Nupieškite stačiakampį iš “*”. Žvaigždučių kiekis pasirinktinas
// * * * * * * * * * * * * * * * * * * * * * *
// * * * * * * * * * * * * * * * * * * * * * *
// * * * * * * * * * * * * * * * * * * * * * *
// * * * * * * * * * * * * * * * * * * * * * *
// * * * * * * * * * * * * * * * * * * * * * *
// * * * * * * * * * * * * * * * * * * * * * *
// * * * * * * * * * * * * * * * * * * * * * *
// * * * * * * * * * * * * * * * * * * * * * *
// * * * * * * * * * * * * * * * * * * * * * *
// Nuspalvinkite stačiakampį trijomis spalvomis: Geltona, Žalia, Raudona, kad gautume lietuvos vėliavą
// 180 */ 60 chalk pakeisti \n

// spresti for
//production environment- kodas kuris yra paruostas vartojimui

//developmental environment - kodas kuris yra gaminamas arba testuojamas
