import { BaseModel } from "../baseModel.model.js";

class CommandLine {


    constructor(data){
        console.log("new product line data",data);
        super(props);
        this.assign(props);
        this.id = data.product_id;
        this.command_id = data.command_id;
        this.quantity= data.quantity;

    }

    id
    quantity
    product_id


};