import {Nav} from '../../layout/nav';
import {Header} from '../../layout/header';
import {Footer} from '../../layout/footer';
import { Register } from './register';

export function RegisterPage() {
    return (
      <>
        <Nav/>
        <Header/>
        <div className="container">
            <Register/>
        </div>
        <Footer/>
      </>
    );
  }