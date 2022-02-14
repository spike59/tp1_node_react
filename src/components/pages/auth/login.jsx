import GenericForm from "../../common/generic_form";
import GenericInput from "../../common/generic_input";

export const Login = () => {
  
  const handleSubmit = async (response) => {
    let resp = await response.text();
    console.log("resp!",resp);
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

