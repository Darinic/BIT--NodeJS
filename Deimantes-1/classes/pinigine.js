class Pinigine {
    constructor() {
        this.popieriniaiPinigai = 0,
        this.metaliniaiPiniginai = 0,
        this.monetos = 0,
        this.banknotai=0
        
    }
    ideti(x = 1) {
        if(x <= 2) {
            this.metaliniaiPiniginai += x
            this.monetos++
        } else{
            this.popieriniaiPinigai += x
            this.banknotai++
        }
    }
    skaiciuoti() {
        let suma= this.metaliniaiPiniginai + this.popieriniaiPinigai
        console.log(`Metalinių pinigų buvo:${this.metaliniaiPiniginai}, o popierinių pinigų: ${this.popieriniaiPinigai}, bendra suma yra ${suma}`)
    }
    kiekTuriu() {
        console.log(`Monetų turių ${this.monetos}, o banknotų ${this.banknotai}`)
    }
}

export default Pinigine