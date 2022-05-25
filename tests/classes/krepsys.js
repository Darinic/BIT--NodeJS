import vaisius from "./vaisius.js";

class Krepsys {
  static count = 0;
  static vaisiai = 0;
  static grauztukai = new Map();
  constructor(size) {
    this.vaisiai = [];
    this.populate(size);
    Krepsys.count += size;
  }
  populate(length = 20) {
    this.vaisiai = [...Array(length).keys()].map(() => new vaisius());
  }

  static pripildyti(ceil = 20) {
    if (Krepsys.count < ceil) {
      let count = Krepsys.count;
      let gap = Array(ceil - count).fill(new vaisius());
      //klaida kazkur del this, negaliu sujungti statica...
      vaisiai = this.vaisiai.concat(gap);
      Krepsys.count = ceil;
    }
  }

  isimti() {
    const vaisiu = this.filterVaisiai();
    let vaisius = vaisiu[0];

    vaisiu.splice(vaisiu.length - 1, 1);

    Krepsys.count--;
    if (vaisius.prakastas == "true") {
      Krepsys.grauztukai.set(vaisius.id, vaisius);
    }
    return console.log(
      `Įrašas ${vaisius.id} su dydžių ${vaisius.dydis} buvo sekmingai išrintas`
    );
  }

  filterVaisiai() {
    return this.vaisiai.sort((a, b) => b.dydis - a.dydis);
  }
}

export default Krepsys;
