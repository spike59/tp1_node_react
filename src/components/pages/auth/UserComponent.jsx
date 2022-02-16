import {Nav} from '../../layout/nav';
import {Header} from '../../layout/header';
import {ProductComponent} from '../../business_components/product/productComponent';
import {Footer} from '../../layout/footer';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';

export function UserComponent() {
  let { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {

    // declare the async data fetching function
    const fetchData = async () => {
      let token = JSON.parse(localStorage.getItem('token'));
      let my_headers =new Headers();
      my_headers.append("Authorization" , 'Bearer ' + token )
      const fetchParams = {
        method:"get",
        headers:my_headers
      }
      // get the data from the api
      const in_data = await fetch(`http://localhost:5000/auth/${id}`,fetchParams);
      // convert the data to json
      const json = await in_data.json();
      // set state with the result
      setData(json);
      console.log("json result apres fetch user id")
    }

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);;
  }, [])


  let user = data;
  //console.log("product",product)
  if (user ){

    
    //console.log("product",product)
    return (
      <>
        <Nav/>
        <Header/>
        <div>
              id={user.id}
              email={user.email} 
        </div>  
        <Footer/>
      </>
    );
  }else{
    return (
      <>
      <Nav/>
      <Header/>
      <p>user non trouvé...</p>
      <Footer/>
    </>
    )
  }
}