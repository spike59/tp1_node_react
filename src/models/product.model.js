import { BaseModel } from "./baseModel.model.js";
export class Product extends BaseModel {

    constructor(props){
        super(props);
        this.assign(props);
    }

    //propriétés
    id = 0;
    title = "";
    description = "";
    image = "";
    price = 0.0;
    
    gender_id = 0;
    category_id = 0;

};