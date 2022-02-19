import {Nav} from '../../layout/nav';
import {Header} from '../../layout/header';
import {Login} from './login';
import {Footer} from '../../layout/footer';
import { useState,useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';




export function ValidationPage() {
    const [account,setAccount]= useState(null);
    const [search,setSearch] = useSearchParams();
    console.log("search params",search);
    console.log("search t",search.get("t"));
    const [data,setData] = useState(null)
    useEffect(() => {
        let token = search.get("t");
        let body = {"token":token} ;
        // declare the async data fetching function
        const fetchData = async () => {
            const data = await fetch('http://localhost:5000/auth/validate',{
                "method":"post",
                "headers": {
                    "content-type": "application/json",
                },
                "body":body,            
            })
            .then((response)=>{

                setData(response);

            })
            .catch(e=> console.log("error",e))
        
 
        }
  
        // call the function
        fetchData()
          // make sure to catch any error
          .catch(console.error);;
      }, [])
    return (
      <>
        <Nav/>
        <Header/>
        <div className="container">
            <p>validation</p>
        </div>
        <Footer/>
      </>
    );
  }