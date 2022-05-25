class pirkiniuKrepselis {
  constructor() {
    this.turinys = new Map();
  }
  idetiSureli(kiekis = 1) {
    if (!this.turinys.get("surelis")) {
      this.turinys.set("surelis", kiekis);
    } else {
      const dezute = this.turinys.get("surelis");
      this.turinys.set("surelis", dezute + kiekis);
    }
  }
  idetiPieno(kiekis = 1) {
    if (!this.turinys.get("pienas")) {
      this.turinys.set("pienas", kiekis);
    } else {
      const dezute = this.turinys.get("pienas");
      this.turinys.set("pienas", dezute + kiekis);
    }
  }
  idetiDuonos(kiekis = 1) {
    if (!this.turinys.get("duona")) {
      this.turinys.set("duona", kiekis);
    } else {
      const dezute = this.turinys.get("duona");
      this.turinys.set("duona", dezute + kiekis);
    }
  }
  krepselioTurinys() {
    console.table(this.turinys);
  }
}
export default pirkiniuKrepselis;
