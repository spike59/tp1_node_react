export const MenuLink =(props) =>{
    const {name} = props
    return(
        <li className="nav-item">
            <a className="nav-link" href="#">{name}</a>
        </li>
    )
}