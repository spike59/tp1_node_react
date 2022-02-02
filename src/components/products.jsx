import { Product } from "./product"
import { useState,useEffect } from "react";
export const Products = ()=>{
    const [data, setData] = useState([]);
    
    useEffect(() => {
        // declare the async data fetching function
        const fetchData = async () => {
          // get the data from the api
          const in_data = await fetch('data/product.json');
          // convert the data to json
          const json = await in_data.json();
          // set state with the result
          setData(json);
        }
  
        // call the function
        fetchData()
          // make sure to catch any error
          .catch(console.error);;
      }, [])
  
      

      let products = data.map(product =>{
        return <Product 
            key={product.id} 
            title={product.title} 
            description={product.description}
            price = {product.price}
            image ={product.image}
        />
      })  
    
    
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