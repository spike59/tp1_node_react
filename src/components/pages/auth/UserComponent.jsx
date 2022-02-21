import { Nav } from '../../layout/nav';
import { Header } from '../../layout/header';
//import { ProductComponent } from '../../business_components/product/productComponent';
import { Footer } from '../../layout/footer';
import { useState, useEffect,useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProfilContext } from '../../../utils/profil-context';

export function UserComponent() {
  const {profil,setProfil} = useContext(ProfilContext);
  console.log("current profil",profil);
  let { id } = useParams();
  //console.log("Changement user !",id);
  const [currentUser,setCurrentUser] = useState(0);
  if (currentUser !== id){
    console.log("set new user",id);
    setCurrentUser(id);
  }
  
  const [data, setData] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    
    // declare the async data fetching function
    const fetchData = async () => {
      //console.log("fetching");
      let token = JSON.parse(localStorage.getItem('token'));
      let my_headers = new Headers();
      my_headers.append("Authorization", 'Bearer ' + token)
      const fetchParams = {
        method: "get",
        headers: my_headers
      }
      
      // get the data from the api
      const in_data = await fetch(`http://localhost:5000/auth/${currentUser}`, fetchParams);
      // convert the data to json
      //console.log("indata headers", in_data.status);
      let json={};
      if (in_data.status.toString() === "200") {
        setStatus("authorized");
        json = await in_data.json();
        //console.log("json data",json);
        
      }
      else if (in_data.status.toString() === "401") {
        setStatus("unauthorized");
      }
      else {
        setStatus("error");
      }

      // set state with the result
      setData(json);

      //console.log("json result apres fetch user id")
    }

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);;
  }, [currentUser]);

  // if (status == "authorized" && data){
  //   setProfil({
  //     "user":{
  //       "name":data.email,
  //       "id":data.id,
  //       "role":data.role
  //     }
  //   })
  // }

  console.log("status!!",status);
  switch (status) {
    case "loading":     
      return (
          <p>loading</p>
      );


    case "authorized":
      {
        let user = data;
        //console.log("product",product)
        if (user) {
          //console.log("product",product)
          return (
              <div>
                <h2>Profil utilisateur</h2>
                <p>id={user.id}</p>
                <p>email={user.email} </p>
              </div>
          );
        }

      }
      break;

    case "unauthorized":
      {
        return (
            <p>accés refusé</p>
        )
      }

    case "error":
      {
        return (
            <p>erreur user non trouvé...</p>
        )
      }

    default:
      return (<div>erreur</div>);

  }

}