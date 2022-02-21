import {FilterMenu} from '../../business_components/product/filter_menu';
import {Products} from '../../business_components/product/products';

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
        <FilterMenu 
          gender_id={gender_id} 
          genderOnClick={genderOnClick} 
          category_id={category_id} 
          categoryOnClick = {categoryOnClick}
          />
        <Products
          gender_id={gender_id}
          category_id={category_id}  
        />
      </>
    );
  }