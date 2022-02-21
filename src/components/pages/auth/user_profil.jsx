import { ProfilContext } from "../../../utils/profil-context";
import { useContext ,useEffect} from "react";
export function UserProfil() {
    const { profil, setProfil } = useContext(ProfilContext);
    let token = JSON.parse(localStorage.getItem('token'));
    let user_id = JSON.parse(localStorage.getItem('user_id'));
    useEffect(() => {
        if (token) {
          // declare the async data fetching function
          const fetchData = async () => {
            console.log("fetching");
    
            let my_headers = new Headers();
            my_headers.append("Authorization", 'Bearer ' + token)
            const fetchParams = {
              method: "get",
              headers: my_headers
            }
    
            // get the data from the api
            const in_data = await fetch(`http://localhost:5000/auth/${user_id}`, fetchParams);
            // convert the data to json
            console.log("indata headers", in_data.status);
            let json = {};
            if (in_data.status.toString() === "200") {
              //setStatus("authorized");
              json = await in_data.json();
              console.log("json data", json);
    
            }
            else if (in_data.status.toString() === "401") {
              //setStatus("unauthorized");
            }
            else {
              //setStatus("error");
            }
    
            // set state with the result
            //setData(json);
            if (!json.id){
              setProfil({
                "user": {
                  "name": "anonymous"
                }
              })
            }else{
              if (!profil.user.id ||profil.user.id !== json.id){
                console.log("mis a jour du porfil context"); 
                setProfil({
                  "user": {
                    "name": json.email,
                    "id": json.id,
                    "role": json.role
                  }
                })
              }
            }
    
    
            console.log("json result apres fetch user id")
          }
    
          // call the function
          fetchData()
            // make sure to catch any error
            .catch(console.error);;
        }
      }, [profil]);
    return (

        <div className="container">
            <p>user profil {profil.user.name}</p>
        </div>
    );
  }