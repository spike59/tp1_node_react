import './App.css';
import { HomePage } from './components/pages/home/home_page';
import { ContactPage } from './components/pages/contact/contact_page';
import { ProductPage } from './components/pages/product/product_page';
import { UsersComponent } from './components/pages/admin/users_component';
import { UserComponent } from './components/pages/auth/UserComponent';
import { RegisterPage } from './components/pages/auth/register_page';
import { LoginPage } from './components/pages/auth/login_page';
import { LogoutPage } from './components/pages/auth/logout_page';
import { AdminPage } from './components/pages/admin/admin_page';
import { ValidationPage } from './components/pages/auth/validationPage';
import { ErrorPage } from './components/pages/error_page';
import { Routes, Route } from 'react-router-dom';
import { VerifMailPage } from './components/pages/auth/verif_mail_page';
import { createContext, useEffect, useState } from 'react';
import { PublicScreen } from './components/layout/public_screen';
import { TestScreen } from './components/screens/test_screen';
import { Layout } from './components/layout/layout';
import { ProfilContext } from './utils/profil-context';
import { UserProfil } from './components/pages/auth/user_profil';


function App() {
  const [profil, setProfil] = useState({
    "user": {
      "name": "anonymous"
    }
  });
  let token = JSON.parse(localStorage.getItem('token'));
  let user_id = JSON.parse(localStorage.getItem('user_id'));

  useEffect(() => {
    if (token) {
      // declare the async data fetching function
      const fetchData = async () => {
        console.log("fetching");

        let my_headers = new Headers();
        my_headers.append("Authorization", 'Bearer ' + token)
        const fetchParams = {
          method: "get",
          headers: my_headers
        }

        // get the data from the api
        const in_data = await fetch(`http://localhost:5000/auth/${user_id}`, fetchParams);
        // convert the data to json
        console.log("indata headers", in_data.status);
        let json = {};
        if (in_data.status.toString() === "200") {
          //setStatus("authorized");
          json = await in_data.json();
          console.log("json data", json);

        }
        else if (in_data.status.toString() === "401") {
          //setStatus("unauthorized");
        }
        else {
          //setStatus("error");
        }

        // set state with the result
        //setData(json);
        if (!json.id){
          setProfil({
            "user": {
              "name": "anonymous"
            }
          })
        }else{
          if (!profil.user.id ||profil.user.id !== json.id){
            console.log("mis a jour du porfil context"); 
            setProfil({
              "user": {
                "name": json.email,
                "id": json.id,
                "role": json.role
              }
            })
          }
        }


        console.log("json result apres fetch user id")
      }

      // call the function
      fetchData()
        // make sure to catch any error
        .catch(console.error);;
    }
  }, [profil]);


  // const profil = {
  //   "user":{
  //     "name": "anonymous"
  //   }
  // }
  const data = { profil, setProfil };

  // const ProfilContext = createContext(profil)
  return (
    <ProfilContext.Provider value={data}>
      <div className="App">
        <Routes>
          <Route path="/" element={<PublicScreen />}>
            <Route path="/" index element={<HomePage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/account/verif_mail" element={<VerifMailPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/logout" element={<LogoutPage />} />
            <Route exact path="/user/:id" element={<UserComponent />} />
            <Route path="/admin" element={<AdminPage role="Admin" />} />
            <Route path="/dataAdmin" element={<AdminPage role="DataAdmin" />} />
            <Route path="/account/validation" element={<ValidationPage />} />
            <Route path="/test/test_screen" element={<TestScreen />} />
            <Route path="/profil" element={<UserProfil />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
          {/* <ProfilContext.Consumer> */}
          <Route path="/admin/" element={<Layout type="admin" />}>
            <Route path="/admin/user" element={<UsersComponent />} />
          </Route>
          {/* </ProfilContext.Consumer> */}
        </Routes>
      </div>
    </ProfilContext.Provider>
  );
}

export default App;
