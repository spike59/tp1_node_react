import { MenuLink } from "../common/menulink"

export const Footer = () => {

    return (
        <footer className="py-5 bg-dark">
            <ul className="text-center">
                <MenuLink name="contact"/>
                <MenuLink name="informations legales"/>
            </ul>
            <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Your Website 2021</p></div>
        </footer>
    )
}


