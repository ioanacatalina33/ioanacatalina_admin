import { NavbarContainer, NavbarLink, NavbarLinkContainer } from './Navbar.style';

export default function Navbar() {
    return (
        <NavbarContainer>
            <NavbarLinkContainer>
                <NavbarLink className="nav-link active" to="/">
                    Home
                </NavbarLink>
                <NavbarLink className="nav-link" to="/albums">
                    Albums
                </NavbarLink>
                <NavbarLink className="nav-link" to="/locations">
                    Locations
                </NavbarLink>
                <NavbarLink className="nav-link" to="/blog">
                    Blog Posts
                </NavbarLink>
            </NavbarLinkContainer>
        </NavbarContainer>
    );
}
