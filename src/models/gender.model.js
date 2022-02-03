import { BaseModel } from "./baseModel.model.js";
export class Gender extends BaseModel {

    constructor(props){
        super(props);
        this.assign(props);
    }

    //propriétés
    id = 0;
    title = "";
};