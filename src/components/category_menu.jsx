import { useEffect,useState } from "react";
import { MenuLink } from "./menulink";
export const CategoryMenu =() =>{

    const [data, setData] = useState([]);
    // const [test,setTest] = useState("blabla")

    useEffect(() => {
      // declare the async data fetching function
      const fetchData = async () => {
        // get the data from the api
        const in_data = await fetch('data/category.json');
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

    var categoryLinks = [];
    for (var i = 0; i < data.length; i++) {
        // note: we are adding a key prop here to allow react to uniquely identify each
        // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
        categoryLinks.push(<MenuLink key={i} name={data[i].title} />);
    }

    return (<ul className="nav justify-content-center">{categoryLinks}</ul>);


}