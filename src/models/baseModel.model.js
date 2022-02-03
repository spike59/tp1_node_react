export class BaseModel {

    static relations = [];

    assign = (props) => {
        for (let key in props) {
            if (!this.hasOwnProperty(key)) {
                delete props[key];
                continue;
            }
            if(key.endsWith('_date')){
                props[key] = new Date(props[key])
            }
            // if(key.endsWith('_id')){
            //     if (!this.hasOwnProperty("hasOne")){
            //         this.hasOne = [];
            //         let modelName = key.replace("_id","");
            //         let maj = modelName[0].toUpperCase() + modelName.substring(1);
            //         this.hasOne.push(maj);
            //     }

            // }
        }
        Object.assign(this, props);
    }
    static from(data){
        if (Array.isArray(data)){
            return data.map(item => new this(item) )
        }
        else if (typeof data == "object" ){
            return new this(data)
        }
        return
    }
};