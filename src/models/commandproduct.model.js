import { BaseModel } from "./baseModel.model.js";
export class CommandProduct extends BaseModel {

    constructor(props){
        super(props);
        this.assign(props);
    }

    //propriétés
    command_id = 0;
    product_id =0;
    quantity = 0;
    
};