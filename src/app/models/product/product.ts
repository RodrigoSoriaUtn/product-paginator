export class Product {

    productId : Number
    name : string
    description : string

    constructor(name : string, description : string, productId : Number) {
        this.name = name
        this.description = description
        this.productId = productId
    }
}
