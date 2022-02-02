import { MenuLink } from "./common/menulink"
import { useEffect,useState } from "react";
export const GenderMenu =() =>{
  
  const [data, setData] = useState([]);
  // const [test,setTest] = useState("blabla")

  useEffect(() => {
    // declare the async data fetching function
    const fetchData = async () => {
      // get the data from the api
      const in_data = await fetch('data/gender.json');
      // convert the data to json
      const json = await in_data.json();
      // set state with the result
      setData(json);
    }

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);;
  }, [])
  let genderLinks = data.map(gender =>{
    return <MenuLink key={gender.id} name={gender.title}/>
  })
  return(
    <ul className="nav justify-content-center">
      {genderLinks}
    </ul>
  )
}