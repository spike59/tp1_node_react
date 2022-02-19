import {Nav} from '../layout/nav';
import {Header} from '../layout/header';
import {Footer} from '../layout/footer';

export function ErrorPage() {
    return (
      <>
        <Nav/>
        <Header/>
        <div className="container">
            <p>error page</p>
        </div>
        <Footer/>
      </>
    );
  }