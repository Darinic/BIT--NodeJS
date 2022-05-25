import fs from "fs/promises";
import { readFile } from "fs";

const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const loterija = async () => {

const names = ['Egle', 'Vidas', 'Giedrius', 'Juste', 'Dominyka', 'Aleksandras', 'Virgis', 'Deimante', 'Deividas', 'Andrius'];

try {
  await fs.access("./database.json");
} catch {
  await fs.writeFile('./database.json', JSON.stringify(names))
}

  const fileNames = await fs.readFile('./database.json', 'utf8')

  let fileNamesObject= JSON.parse(fileNames)
  let winner = random(0, 9)
  let stats= fileNamesObject[fileNamesObject.length -1]

  if(stats != undefined && stats.hasOwnProperty('winners')) {
    if(stats.winners.hasOwnProperty(winner)) {
      if(stats.winners[winner] <2) {
        fileNamesObject[fileNamesObject.length - 1].winners[winner]++
        console.log('Loteriją antrą kartą laimėjo: ' + fileNamesObject[winner])
      }
    }else {
      fileNamesObject[fileNamesObject.length - 1].winners[winner] = 1
      console.log('Loterijos etapą laimėjo: ' + fileNamesObject[winner])
    }
  } else {
  fileNamesObject.push({
    winners: { 
     [winner]: 1
    }
    })
    console.log('Loterijos etapą laimėjo: ' + fileNamesObject[winner])
  }



  let json= JSON.stringify(fileNamesObject)

  await fs.writeFile('./database.json', json)

  // let result= true

  // if(Object.keys(stats.winners).length >= 10) {
  //   result = Object.keys(stats.winners).find(key => stats.winners[key] <2)
  // }

// if(result)
  setTimeout(loterija, 200)

  }

loterija()



//relative paths
// ./test/test.txt
//absolute paths

// console.log('Test')
// console.log('Test223')

// function test() {
//     console.log('Test123456')
// }
// test()
//filesystem promises

// let json = '[]'

// const asinchronineFunkcija = async () => {};
// //filo atidarymas su fileHandle
// const fileHandle = await fs.open("./database.json", "r+");
// try {
//   const hello = await fileHandle.readFile({ encoding: "utf-8" });

//   let json = JSON.parse(hello);

//   json[0].test = "Test";

//   json = JSON.stringify(json);
// } catch {
//     console.log('Duomenu bazės failas sukurtas')
// //   await fs.writeFile("./database.json", json);
// }
// let savedData = await fs.readFile("./database.json", "utf8");

// console.log(JSON.parse(savedData));

// // fileHandle.write(json).then((success, failed) => {
// //     console.log(success)
// // })

// // new Promise

// //fileSystem callback

// // readFile('./hello.txt', 'utf-8', (err, data) => {
// //     console.log(data)
// // })

// try {
//   await fs.access("./modules");
//   console.log("Direktorija egzistuoja");
// } catch {
//   await fs.mkdir("./modules");
//   console.log("Direktorijos rasti nepavyko, tačiau ją sukurėme");
// }
