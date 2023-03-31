export default class Vehicle {
    constructor ( id , type , position , isMechanic , gasTank , speed , isBlocked ) {
        this.id = id
        this.type = type
        this.position = position
        this.isMechanic = isMechanic
        this.gasTank = gasTank
        this.speed = speed
        this.isBlocked = isBlocked
    }

    get typeNow () {
        let types = [ 'light' , 'heavy' ]
        return types[this.type]
    }

    block() {
        if(this.isBlocked == false) {
            this.isBlocked == true
        } else if (this.isBlocked == true) {
            this.isBlocked == false
        }
        console.log(`block`)
    }

    
}