import {Nav} from '../../layout/nav';
import {Header} from '../../layout/header';
import {Footer} from '../../layout/footer';
import { Link, useSearchParams } from 'react-router-dom';
//import { Register } from './register';

export function VerifMailPage() {
    
    const [search,setSearch] = useSearchParams();
    let token = search.get("t");
    //navigate('../account/validation?t=' + token);
    /*http://localhost:3000/account/validation?t=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtYWlsIjoibm5Abm4uZnIiLCJyb2xlIjoiVXNlciIsInBhc3N3b3JkIjoibm4iLCJpYXQiOjE2NDUyNjg5ODgsImV4cCI6MTY0NTM1NTM4OH0.u59BvK7fbcoa0Ie4ov1Yz4i1R4AYX0pk0jqXRevnj-Y
    */
    const url = '../account/validation?t=' + token;
    return (
        <div className="container">
            <p>verif mail</p>
            <p>cliquer sur le lien de validation (faux mail )</p>
            <Link to={url}>confirmer l'inscription</Link>
        </div>
    );
  }