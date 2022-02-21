//import { MenuLink } from "../common/menulink"
import {Link} from 'react-router-dom';
import { useContext } from 'react';
//import {ProfilContext} from '../../utils/profil-context';
export const Nav = (props) => {
    console.log("nav props",props);
    const {user} = props;
    console.log("nav profil",user);
    //const profil = useContext(App.ProfilContext);
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-4 px-lg-5">
                <Link className="navbar-brand" to="/">Shop Deluxe</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>

                        <li className="nav-item"><Link className="nav-link" to="/admin/user">admin</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/user/1">user1</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/user/2">user2</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/test/test_screen">testscreen</Link></li>


                    </ul>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        {user.id ?
                        <li className="nav-item"><Link className="nav-link" to="/logout">logout</Link></li>:
                        <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
                        }
                        
                        
                        
                        
                    </ul>
                    <form className="d-flex">
                        <button className="btn btn-outline-dark" type="submit">
                            <i className="bi-cart-fill me-1"></i>
                            Cart
                            <span className="badge bg-dark text-white ms-1 rounded-pill">0</span>
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    )
}




