import {Nav} from '../../layout/nav';
import {Header} from '../../layout/header';
import {ProductComponent} from '../../business_components/product/productComponent';
import {Footer} from '../../layout/footer';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';

export function UsersComponent() {
  
  const [data, setData] = useState([]);
  const [status,setStatus] = useState("loading");

  useEffect(() => {
    let token = JSON.parse(localStorage.getItem('token'));
    let my_headers =new Headers();
    my_headers.append("Authorization" , 'Bearer ' + token )
    const fetchParams = {
      method:"get",
      headers:my_headers
    }
    // declare the async data fetching function
    const fetchData = async () => {
      // get the data from the api
      const in_data = await fetch(`http://localhost:5000/auth`,fetchParams);
      let json;
      if (in_data.status == "200")
      {
        setStatus("ok");
        //status = "ok";
        json = await in_data.json();
        setData(json);
      }
      else if(in_data.status == "401"){
        setStatus("unauthorized");
      }
      else{
        setStatus("error");
      }
      // convert the data to json

      // set state with the result
      
    }

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);;
  }, [])

  //console.log("data0",data);
  //console.log("l",data.length);
  //console.log("data l>0",data.length > 0);
  switch (status)
  {

    case "loading":
      return(
             <p>loading...</p> 
      );
    
    case "ok":
      if (data.length > 0 )
      {
        const users = data.map(user => {
            return (<p key={user.id} className="text-center">email {user.email} - role {user.role}</p>)
        });
        
        //console.log("product",product)
        return (
               <> {users}</>
        );
    
      }
      else
      {
        return (
          <p>produit non trouvé...</p>
        )
      }
    case "unauthorized":
      return(
            <p>accés refusé</p>
      )
    default:
      return(
            <p>erreur</p>
      )
  }

}