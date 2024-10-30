import { Routes } from 'utils/consts';
import { NavbarContainer, NavbarLink, NavbarLinkContainer } from './Header.style';

export default function Header() {
    return (
        <NavbarContainer>
            <NavbarLinkContainer>
                <NavbarLink className="nav-link active" to={Routes.Home}>
                    Home
                </NavbarLink>
                <NavbarLink className="nav-link" to={Routes.Travel}>
                    Travel
                </NavbarLink>
                <NavbarLink className="nav-link" to={Routes.Dance}>
                    Dance
                </NavbarLink>
                <NavbarLink className="nav-link" to={Routes.Locations}>
                    Locations
                </NavbarLink>
                <NavbarLink className="nav-link" to={Routes.Blog}>
                    Blog
                </NavbarLink>
            </NavbarLinkContainer>
        </NavbarContainer>
    );
}
