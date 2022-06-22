// code here for class release 0
class Bank {
    constructor(id, name, type, limit, customers){
        this.id = id
        this.name = name
        this.type = type
        this.limit = limit
        this.customers = customers
    }

    toJSON(){
        return {
            id : this.id,
            name : this.name,
            type : this.type,
            customers : this.customers
        }
    }
}

class LocalBank extends Bank{
    constructor(id, name, customers){
        super(id, name, "LocalBank", 3, customers)
    }
}

class NationalBank extends Bank{
    constructor(id, name, customers){
        super(id, name, "NationalBank", 5, customers)
    }
}


class Customer{
    #ktp
    #depositAmount
    constructor(name, ktp, depositAmount){
        this.name = name
        this.#ktp = ktp
        this.#depositAmount = depositAmount
    }

    get ktp(){
        return this.#ktp
    }

    set ktp(value){
        this.#ktp = value
    }

    get depositAmount(){
        return this.#depositAmount
    }

    set depositAmount(value){
        this.#depositAmount = value
    }

    toJSON(){
        return {
            name : this.name,
            ktp : this.ktp,
            depositAmount : this.depositAmount
        }
    }
}

class FactoryBank {
    static createBank(id, name, type, customers){
        if(type === "NationalBank"){
            return new NationalBank(id, name, customers)
        }else{
            return new LocalBank(id, name, customers)
        }
    }
}


module.exports = {FactoryBank, Customer}