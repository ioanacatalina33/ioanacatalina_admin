import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Colors } from 'environment/Colors';

export const NavbarContainer = styled.nav`
    width: 100%;
    margin: 0;
    background-color: ${Colors.primary.normal};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const NavbarLinkContainer = styled.div`
    display: flex;
`;

export const NavbarLink = styled(Link)`
    color: white;
    padding: 1.6rem;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-decoration: none;
    color: ${Colors.white};
    transition-duration: 0.5s;
    &:hover {
        background-color: ${Colors.primary.hover};
    }
    &:active {
        color: ${Colors.gray.lightest};
    }
`;
