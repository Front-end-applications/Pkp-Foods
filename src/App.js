import React from 'react'
import 'normalize.css'

import HeaderContainer from './containers/HeaderContainer'
import JumbotronContainer from './containers/JumbotronContainer'
import NavBarContainer from './containers/NavBarContainer'
import FooterContainer from './containers/FooterContainer'
import ProductCardContainer from './containers/ProductCardContainer'
import CollectionsCardContainer from './containers/CollectionsContainer'
import QualityStatementsContainer from './containers/QualityStatementsContainer'
import WhatsappContainer from './containers/WhatsappLinkContainer'

function App () {
    return (
      <>
        <HeaderContainer />
        <JumbotronContainer />
        <NavBarContainer />
        <CollectionsCardContainer />
        <QualityStatementsContainer />
        <WhatsappContainer />
        <FooterContainer />
      </>

        // <>
        //     <HeaderContainer />
        //     <JumbotronContainer />
        //     <NavBarContainer />
        //     <ProductCardContainer />
        //     <WhatsappContainer />
        //     <FooterContainer />
        // </>
    )
}

export default App
