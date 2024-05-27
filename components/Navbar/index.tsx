import * as React from 'react';
import ExternalLinkIcon from 'components/Icons/externalLink';
import { NavbarWrapper, NavLinks, NavLogo } from './navbar.style';

function Navbar() {
    return (
        <NavbarWrapper>
            <NavLogo src="/logo-img.png" />
            <NavLinks>
                <ul>
                    <li>Menu</li>
                </ul>
                <a href="/">Contact us</a>
                <a href="/" className="external-btn">
                    <ExternalLinkIcon />
                    Share Link
                </a>
            </NavLinks>
        </NavbarWrapper>
    );
}

export default Navbar;
