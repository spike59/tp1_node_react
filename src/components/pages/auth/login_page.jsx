import {Nav} from '../../layout/nav';
import {Header} from '../../layout/header';
import {Login} from './login';
import {Footer} from '../../layout/footer';

export function LoginPage() {
    return (
      <>
        <Nav/>
        <Header/>
        <div className="container">
            <Login/>
        </div>
        <Footer/>
      </>
    );
  }