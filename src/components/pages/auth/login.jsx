import { Link, useNavigate } from "react-router-dom";
import GenericForm from "../../common/generic_form";
import GenericInput from "../../common/generic_input";
//import { UserComponent } from "./UserComponent";
// import { ProfilContext } from "../../../utils/profil-context";
// import { useContext } from "react";



export const Login = () => {
  let navigate = useNavigate();
  // const {profil,setProfil} = useContext(ProfilContext);
  // setProfil({
  //   "user":{
  //     "name":"admin",
  //     "role":"Admin"
  //   }
  // })
  const handleSubmit = async (response) => {
    let resp = await response.text()
    let json = JSON.parse(resp);
      console.log("resp! user ",json);
      if (json && json.token){
        console.log("user authentifié!");
        
        let token = json.token;
        //document.cookie = `token=${token}`;
        localStorage.setItem("token", JSON.stringify(token));
        localStorage.setItem("user_id", JSON.stringify(json.id));
        //navigate(`/user/${json.id}`);
        navigate('/profil');
      }
      else{
        console.log("authentification failed!!",resp)
      }
      return resp;
    
  };
  // eslint-disable-next-line
  const mailPatern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  return (
      <GenericForm
        endpoint="http://localhost:5000/auth/login"
        submitButtonText="Envoyer"
        callback={handleSubmit}
        validation={true}
        id="myForm"
        className="bg-secondary"
      >
        <GenericInput
          className="mb-3"
          name="email"
          type="email"
          labelText="Adresse mail"
          required={true}
          pattern={mailPatern}
          invalidText="Saisr un email valide"
        />
        <GenericInput
          className="mb-3"
          name="password"
          labelText="Password"
          required={true}
          invalidText="Saisir un mot de passe"
        />
        <Link className="nav-link" to="/register">register</Link>
      </GenericForm>
  );
};

