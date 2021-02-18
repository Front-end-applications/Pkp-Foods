import React from "react";

import {
    HeaderContainer,
    NavBarContainer,
    WhatsappContainer,
    FooterContainer,
} from "../../containers/CustomerPortal";

import {
    ErrorContainer,
} from "../../containers/Common";

export default function Error() {
    return (
        <HeaderContainer background="#EAEDED">
            <NavBarContainer background="transparent" color="black" />
            <ErrorContainer />
            <WhatsappContainer />
            <FooterContainer />
        </HeaderContainer>
    );
}
