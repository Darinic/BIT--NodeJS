import Helper from "../utils/Helper.js";

class vaisius {
    static info = new Map()

    constructor() {
        this.dydis = Helper.random(5, 25),
        this.id = Helper.random(100000, 9999999)
        this.prakastas = false
    }

    prakasti() {
        this.prakastas = true
        vaisius.info.set(this.id, this)
    }
}

export default vaisius