class Kibiras1 {
    static kiekis = 0

    constructor() {
        (this.akmenuKiekis = 0)
    }
    pridetiAkmeni() {
        this.akmenuKiekis += 1
        Kibiras1.bendrasAkmenuSkaicius(1)
    }
    pridetiDaugAkmenu(x) {
        this.akmenuKiekis += x
        Kibiras1.bendrasAkmenuSkaicius(x)
    }
    kiekPririnktaAkmenu() {
        console.log(`pririnkta buvo:${this.akmenuKiekis}`)
    }
    static bendrasAkmenuSkaicius(akmenuSkaicius) {
         Kibiras1.kiekis += akmenuSkaicius
    }
    static akmenuSkaiciusVisuoseKibiruose() {
        console.log(`Bendras akmenų skaičius yra: ${Kibiras1.kiekis}`)
    }

}

export default Kibiras1