import {Nav} from '../../layout/nav';
import {Header} from '../../layout/header';
import {Login} from './login';
import {Footer} from '../../layout/footer';
import { useNavigate } from 'react-router-dom';

export function LogoutPage() {
  localStorage.removeItem("token");
  useNavigate(`/`);
  return (
    <>
      <Nav/>
      <Header/>
      <div className="container">
         <p> session déconnectée</p>
      </div>
      <Footer/>
    </>
  );
  }