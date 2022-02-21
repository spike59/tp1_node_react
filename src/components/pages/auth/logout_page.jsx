import {Login} from './login';
import { useNavigate } from 'react-router-dom';
import { ProfilContext } from '../../../utils/profil-context';
import { useContext } from 'react';
export function LogoutPage() {
  localStorage.removeItem("token");
  localStorage.removeItem("id");
  const { profil, setProfil } = useContext(ProfilContext);  

  let navigate = useNavigate();
  setTimeout(()=>{
    setProfil({
      "user": {
        "name": "anonymous"
      }
    });
    navigate(`/`);
  },3000);
  return (

      <div className="container">
         <p> session déconnectée</p>
      </div>
  );
  }