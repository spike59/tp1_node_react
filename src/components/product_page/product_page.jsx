import {Nav} from '../layout/nav';
import {Header} from '../layout/header';
import {Product} from '../business_components/product';
import {Footer} from '../layout/footer';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';

export function ProductPage() {
  let { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    // declare the async data fetching function
    const fetchData = async () => {
      // get the data from the api
      const in_data = await fetch(`${window.location.origin.toString()}/data/product.json`);
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
//   console.log("id",id)
//   console.log("data",data)
  let product = data.find(product=>{
    return product.id.toString() === id
  })
  //console.log("product",product)
  if (product ){

    
    //console.log("product",product)
    return (
      <>
        <Nav/>
        <Header/>
        <Product 
              id={product.id}
              title={product.title} 
              description={product.description}
              price = {product.price}
              image ={product.image}
              gender_id = {product.gender_id}
              category_id = {product.category_id}
          />
        <Footer/>
      </>
    );
  }else{
    return (
      <>
      <Nav/>
      <Header/>
      <p>produit non trouvé...</p>
      <Footer/>
    </>
    )
  }
}