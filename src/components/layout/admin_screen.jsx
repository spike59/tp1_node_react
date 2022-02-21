import {Nav} from '../../layout/nav';
import {Header} from '../../layout/header';
import {Footer} from '../../layout/footer';

import { Outlet } from 'react';
export function AdminScreen() {
    return (
      <>
        <Nav/>
        <Header/>
            <Outlet/>
        <Footer/>
      </>
    );
  }