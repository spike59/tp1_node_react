import {Nav} from './nav';
import {Header} from './header';
import {Footer} from './footer';
import { ProfilContext } from '../../utils/profil-context';
import { Outlet } from 'react-router-dom';
import { useContext } from 'react';
export function Layout(props) {
    console.log("layout props",props);

    const {type}=props;
    //const ProfilContext = useContext()
    switch (type){
      case "admin":
        return (
          <ProfilContext.Consumer>{data => 
            data.profil.user ? (data.profil.user.role === "Admin" ?
              <>
                <Nav profil={data.profil}/>
                <Outlet/>
                <Footer/>
              </>:
              <>
                <Nav profil={data.profil}/>
                <div>{data.profil.user.name} vous n'avez pas les droits d'accés</div>
                <Footer/>
              </>
            ):
              <>
                <Nav/>
                  <div>accés interdit aux personnes non authentifiées link to /</div>
                <Footer/>
              </>
            }
          </ProfilContext.Consumer>
        );
      
      default:
        return (
          <>
            <Nav/>
            <Header/>
            <Outlet/>
            <Footer/>
          </>
        );
    }

    // return (
    //   <>
    //     <ProfilContext.Consumer>
    //       {
    //       ({profil,name}) => (
    //         <Nav profil={profil} name={name}/>
    //       )
    //       }
    //     </ProfilContext.Consumer>
    //     <Header/>
    //     <Outlet/>
    //     <Footer/>
    //   </>
    // );
  }