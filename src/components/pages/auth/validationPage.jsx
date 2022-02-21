
import { useState,useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';




export function ValidationPage() {
    const [response,setResponse] = useState({
        "status":"loading",
        "data":null
    });

    const [search,setSearch] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        let token = search.get("t");
        let body = JSON.stringify({"token":token}) ;
        //console.log("bodyyy ",body);
        const fetchData = async () => {
            const in_data = await fetch(`http://localhost:5000/auth/validate`,{
                method:"post",
                headers: {
                    "content-type": "application/json",
                },
                body,            
            })
            .catch(e=> console.log("error",e))

            console.log("indata headers", in_data.status);
            let new_response = {
                "status":in_data.status.toString()
            }
            let json={};
            if (in_data.status.toString() === "200") {
                //setStatus("authorized");
                json = await in_data.json();
                new_response.data = json
                setTimeout(()=>{
                    navigate('../login');
                    
                },5000)
            }
 
            setResponse(new_response);
 
        }
  
        // call the function
        fetchData()
          // make sure to catch any error
          .catch(console.error);;
      }, [])
      //console.log("RETURN",response);


    switch(response.status){

        case '200':
            return (
                <div className="container">
                    <p>compte créé</p>
                </div>
            )
        default:
            return(
                <div className="container">
                    <p>erreur désolé</p>
                </div>
            )
    }
      

  }