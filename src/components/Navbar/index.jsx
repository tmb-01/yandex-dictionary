import React from "react"
import {Logo, NavbarContainer, NavbarWrapper} from "./styles";

function Navbar() {
    return (
        <NavbarWrapper>
            <NavbarContainer>
                <Logo>
                    <span>Yandex</span> translate
                </Logo>
            </NavbarContainer>

        </NavbarWrapper>
    )
}

export default Navbar