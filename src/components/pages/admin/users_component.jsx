import {Nav} from '../../layout/nav';
import {Header} from '../../layout/header';
import {ProductComponent} from '../../business_components/product/productComponent';
import {Footer} from '../../layout/footer';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';

export function UsersComponent() {
  let { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    // declare the async data fetching function
    const fetchData = async () => {
      // get the data from the api
      const in_data = await fetch(`http://localhost:5000/auth`);
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

  if (UsersComponent.lenght >0 ){
    const users = data.map(user => {
        return (<p>email {user.email} - role {user.role}</p>)
    })
    
    //console.log("product",product)
    return (
      <>
        <Nav/>
        <Header/>
            {users}
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