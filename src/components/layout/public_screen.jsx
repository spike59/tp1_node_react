import {Nav} from './nav';
import {Header} from './header';
import {Footer} from './footer';

import { Outlet } from 'react-router-dom';
import { ProfilContext } from '../../utils/profil-context';
import { useContext } from 'react';
//import { useContext } from 'react';
export function PublicScreen() {
    //const user = ProfilContext.Consumer;
    //console.log("user",user);
    //const {profil,setProfil} = useContext(ProfilContext);

    return (
      <>
      <ProfilContext.Consumer>{data => <Nav profil={data.profil}/>}</ProfilContext.Consumer>
        {/* <Nav/> */}
        <Header/>
            <Outlet/>
        <Footer/>
      </>
    );
  }