import { Link } from 'react-router-dom'
import { ProductCard } from './productCard'
import { ProductFull } from './productFull'

export const ProductComponent = (props) => {
    const {  display } = props
    
    switch(display){
        case "card":
            return <ProductCard {...props}/>
            break;
        default :
            return <ProductFull {...props}/>
    }

}