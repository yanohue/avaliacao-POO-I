export default class Vehicle {
    constructor ( id , type , position , isMechanicOK , gasTank , speed , isBlocked ) {
        this.id = id
        this.type = type //posso adicionar uma nova classe Type
        this.position = position
        this.isMechanicOK = isMechanicOK
        this.gasTank = gasTank
        this.speed = speed
        this.isBlocked = isBlocked
    }

    get typeNow () {
        let types = [ 'light' , 'heavy' ] //vetor de classificação de veículos
        return types[this.type]
    }

    get mechanicNow () {
        let aux
        if(this.isMechanicOK == false) {
            return aux = 'not ok'
        } else if (this.isMechanicOK == true){
            return aux = 'ok'
        }
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