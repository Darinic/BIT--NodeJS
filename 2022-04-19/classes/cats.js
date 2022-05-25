class Cats {
    constructor(tiredness, hunger, loneliness, happiness){
        (this.tiredness=tiredness),
        (this.hunger=hunger),
        (this.loneliness=loneliness),
        (this.happiness=happiness)
    }
    status() {
        if(this.tiredness > 7){
            console.log('Cat is tired')
        }else if(this.tiredness >4) {
            console.log('cat is a little bit tired')
        }else {
            console.log('Cat is not tired at all')
        }
        if(this.hunger >7) {
            console.log('Cat is starving')
        }else if (this.hunger >4){
            console.log('Cat is slightly hungry')
        }else {
            console.log('Cat is Full')
        }
        if(this.loneliness > 7) {
            console.log('Cat is lonely :(')
        }else if (this.loneliness >4) {
            console.log('Cat is not lonely but could use some attention')
        }else {
            console.log('Cat is not Lonely!')
        }
        if(this.happiness >7){
            console.log('Cat is happy')
        }else if(this.happiness >4) {
            console.log('Cat is slightly unhappy')
        }else {
            console.log('Cat is unhappy')
        }
    }
    feed() {
        (this.tiredness += 2),
        (this.hunger -= 3),
        (this.loneliness -= 1),
        (this.happiness += 1)
    }
    nap() {
        (this.tiredness -= 5),
        (this.hunger += 4),
        (this.loneliness += 3),
        (this.happiness += 1)
    }
    pet() {
        if(this.loneliness < 4) {
            (this.happiness -= 3)
            console.log("Cat doesn't want to be petted")
        }else {
            (this.tiredness -= 1),
            (this.hunger += 1),
            (this.loneliness -= 3),
            (this.happiness += 2)
        }
    }
}

export default Cats