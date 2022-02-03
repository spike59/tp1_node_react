import { ProductComponent } from "../../business_components/product/productComponent"
import {Product} from '../../../models/product.model'
import { useState,useEffect } from "react";
export const Products = (props)=>{
    const {gender_id,category_id} = props
    const [data, setData] = useState([]);
    
    useEffect(() => {
        // declare the async data fetching function
        const fetchData = async () => {
        const data = Product.from(await (await fetch('data/product.json')).json())
          // get the data from the api
        //   const in_data = await fetch('data/product.json');
        //   // convert the data to json
        //   const json = await in_data.json();
        //   const data = Product.from(json)
        //   console.log(data)
          // set state with the result
        setData(data);
        }
  
        // call the function
        fetchData()
          // make sure to catch any error
          .catch(console.error);;
      }, [])
    let productsFiltered1
    if (gender_id !== 0)
        productsFiltered1 = data.filter(product => {
            return (product.gender_id === gender_id )
        })
        else{
            productsFiltered1 =data;
        }
    let productsFiltered2
    if (category_id !== 0){
        productsFiltered2 = productsFiltered1.filter(product => {
            return (product.category_id === category_id )
        })
    }
    else
    {
        productsFiltered2 =productsFiltered1;
    }

    
    let products = productsFiltered2.map(product =>{
        product.key = product.id
        product.display = "card"
        return <ProductComponent 
            {...product}
        />
    })    

    // let products = productsFiltered2.map(product =>{
    //     return <Product 
    //         key={product.id} 
    //         id={product.id}
    //         title={product.title} 
    //         description={product.description}
    //         price = {product.price}
    //         image ={product.image}
    //         gender_id = {product.gender_id}
    //         category_id = {product.category_id}
    //         card
    //     />
    // })

    
    
    return(
    <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                {products}
            </div>
            </div>
    </section>
    )
}