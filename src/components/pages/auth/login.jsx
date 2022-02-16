import { useNavigate } from "react-router-dom";
import GenericForm from "../../common/generic_form";
import GenericInput from "../../common/generic_input";
//import { UserComponent } from "./UserComponent";




export const Login = () => {
  let navigate = useNavigate();
  const handleSubmit = async (response) => {
    let resp = await response.text()
    let json = JSON.parse(resp);
      console.log("resp! user ",json);
      if (json && json.token){
        console.log("user authentifié!")
        let token = json.token;
        //document.cookie = `token=${token}`;
        localStorage.setItem("token", JSON.stringify(token));
        navigate(`/user/${json.id}`);
      }
      else{
        console.log("authentification failed!!",resp)
      }
      return resp;
    
  };

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
          pattern={'^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'}
          invalidText="Saisr un email valide"
        />
        <GenericInput
          className="mb-3"
          name="password"
          labelText="Password"
          required={true}
          invalidText="Saisir un mot de passe"
        />
      </GenericForm>
  );
};

