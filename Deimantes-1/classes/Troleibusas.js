class Troleibusas {
  static visiKeleiviai = 0;

  constructor() {
    this.keleiviuSkaicius = 0;
  }
  ilipa(x) {
    let ilipo = (this.keleiviuSkaicius + x);
    if (ilipo > 82) {
      Troleibusas.bendrasKeleiviuSkaicius(82 - this.keleiviuSkaicius);
      this.keleiviuSkaicius = 82;
    } else {
      this.keleiviuSkaicius += x;
      Troleibusas.bendrasKeleiviuSkaicius(x);
    }
  }
  islipa(y) {
      let islipo = (this.keleiviuSkaicius - y)
    if (islipo < 0) {
        Troleibusas.bendrasKeleiviuSkaicius(-this.keleiviuSkaicius)
      this.keleiviuSkaicius = 0;
    } else {
      this.keleiviuSkaicius -= y;
      Troleibusas.bendrasKeleiviuSkaicius(-y);
    }
  }
  kiekKeleiviu() {
    console.log(this.keleiviuSkaicius);
  }
  static bendrasKeleiviuSkaicius(keleiviuSkaicius) {
    Troleibusas.visiKeleiviai += keleiviuSkaicius;
  }

  static keleiviuSkaiciusVisuoseTroleibusuose() {
    console.log(`Visuose Troleibuse yra ${Troleibusas.visiKeleiviai}`);
  }
}

export default Troleibusas;
