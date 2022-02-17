const GenericInput = (props) => {
  if (!props.name) {
    throw new Error("props.name not set");
  }
  let capitalize = function(str){
    let new_str= str.charAt(0).toUpperCase() + str.slice(1);
    return new_str;
  }
  const {
    name,
    type = "text",
    labelText = "",
    invalidText = "saisie non valide",
    required,
    pattern,
    ...rest
  } = props;
  //console.log("add props",type);
  return (
    <div {...rest}>
      <label htmlFor={name} className="form-label">
        {labelText}
      </label>
      <input
        type={type}
        className="form-control"
        id={name + capitalize(type) + "Input"}
        name={name}
        required={required}
        pattern={pattern}
      />
      <div className="invalid-feedback">{invalidText}</div>
    </div>
  );
};

export default GenericInput;
