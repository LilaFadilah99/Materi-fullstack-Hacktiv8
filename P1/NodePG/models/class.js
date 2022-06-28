class ResultCategory{
    constructor( name){
        this.name = name
    }
}

class ResutlProduct{
    constructor(name, category, stock, price, productDate){
        this.name = name
        this.category = category
        this.stock = stock
        this.price = price
        this.productDate = productDate
    }
}

module.exports = {
    ResultCategory,
    ResutlProduct
}