class Animals {

    #param3
    static grupe = 'KARALYSTE'

constructor(param, param2) { //Parametrai
    this.param = param //property (savybe)
    this.param2 = param2
    this.#param3= 'Slaptas'
}
setParam(first) {
    this.param= first
}

returnLine(phrase) {
    return `${phrase} ${this.param} ${this.param2}`
}

}

const ani = new Animals('Australiskas', 'Balandis')

ani.setParam('Amerikietiškas')

// export default Animals

class Cars extends Animals {
    constructor(param, param2) { //Parametrai
        super(param, param2)

        this.param = param //property (savybe)
        this.param2 = param2
    } 
}

export {Animals, Cars}