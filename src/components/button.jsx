export const Button =(props) =>{
    const {value,name,onClick} = props
    return(
        <button  className="btn-primary" onClick={() => onClick(value)}>{name}</button>
    )
}