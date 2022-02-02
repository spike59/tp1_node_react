import { Button } from "./button"
import { FilterLink } from "./filterLink";
import { useEffect,useState } from "react";
export const FilterMenu =() =>{
  
  const [genders, setGenders] = useState([]);
  const [categories, setCategories] = useState([]);
  const [gender_id,setGenderId] = useState(1)
  const [category_id,setCategoryId] = useState(1)
  // const [test,setTest] = useState("blabla")

  useEffect(() => {
    // const genderUri = 'http://localhost/shop_data/gender.json'
    // const categoryUri = 'http://localhost/shop_data/category.json'

    const fetchGenders = async () => {
      const in_genders = await fetch('data/gender.json');
      const json = await in_genders.json();
      setGenders(json);
    }
    const fetchCategories = async () => {
        const in_categories = await fetch('data/category.json');
        const json = await in_categories.json();
        setCategories(json);
    }


    // Promise.all([
    //     fetch(genderUri),
    //     fetch(categoryUri)
    // ])
    // .then(
    //     (([gendersText,categoriesText]) => Promise.all([     
    //         gendersText.json(),
    //         categoriesText.json()
    //     ])
    // ))
    // .then(
    //     (([genders,categories]) => {         
    //         setGenders(genders)
    //         setCategories(categories)
    //     })
    // )
    // .catch(e=>console.log("error ",e))

    fetchGenders()
      .catch(console.error);;

    fetchCategories()
      .catch(console.error);;
        
    }, [])

    const genderOnClick = (e,id)=> {
        e.preventDefault()
        console.log("clic",id)
        setGenderId(id)
    }
    const categoryOnClick = (e,id)=> {
        e.preventDefault()
        setCategoryId(id)
    }
    let genderLinks = genders.map(gender =>{
        return <FilterLink key={gender.id} name={gender.title} onClick={genderOnClick} value={gender.id}/>
    })
    let CategoriesLinks = categories.map(category =>{
        return <FilterLink key={category.id} name={category.title} onClick={categoryOnClick} value={category.id}/>
    })

  return(
    <div>
        <ul className="nav justify-content-center">
        {genderLinks}
        </ul>
        <ul className="nav justify-content-center">
        {CategoriesLinks}
        </ul>      
        <p>genre selectionné {gender_id}</p>
        <p>categorie selectionnée {category_id}</p>
    </div>
  )
}