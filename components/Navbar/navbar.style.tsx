import styled from 'styled-components';

export const NavbarWrapper = styled.nav`
    height: 61px;
    display: flex;
    background-color: white;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 2px 4px 0px rgba(96, 97, 112, 0.16);
    padding: 12px 40px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
`;

export const NavLogo = styled.img`
    width: 228px;
`;

export const NavLinks = styled.div`
    display:flex;
    font-size: 18px;
    align-items: center;
    gap: 15px;

    * {
        color: rgba(9, 15, 78, 1);
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    a.external-btn {
        padding: 8px 20px;
        border-radius: 40px;
        color: var(--colors-primary);
        border: 1px solid var(--colors-primary);
        display: flex;
        align-items: center;
        gap: 8px;
    }
`;
