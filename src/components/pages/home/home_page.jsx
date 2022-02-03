import {Nav} from '../../layout/nav';
import {Header} from '../../layout/header';
import {FilterMenu} from './filter_menu';
import {Products} from './products';
import {Footer} from '../../layout/footer';

import { useState } from 'react';
export function HomePage() {
    const [gender_id,setGenderId] = useState(0)
    const [category_id,setCategoryId] = useState(0)
  
    const genderOnClick = (e,id)=> {
      e.preventDefault()
      //console.log("clic",id)
      setGenderId(id)
    }
    const categoryOnClick = (e,id)=> {
        e.preventDefault()
        setCategoryId(id)
    }

    return (
      <>
        <Nav/>
        <Header/>
        <FilterMenu 
          gender_id={gender_id} 
          genderOnClick={genderOnClick} 
          category_id={category_id} 
          categoryOnClick = {categoryOnClick}
          />
        {/* <GenderMenu/>
        <CategoryMenu/> */}
        <Products
          gender_id={gender_id}
          category_id={category_id}  
        />
        <Footer/>
      </>
    );
  }