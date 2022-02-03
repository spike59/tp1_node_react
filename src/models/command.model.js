import { BaseModel } from "./baseModel.model.js";
export class Command extends BaseModel {

    static relations = [
        ["hasOne","Customer"],
        ["hasManyTrought","Product","CommandProducts","productLine"]
    ]

    constructor(props){
        super(props);
        this.assign(props);
    }

    //propriétés
    id = 0;
    numero = "";
    validation_date = new Date();
    customer_id = 0;

    
};