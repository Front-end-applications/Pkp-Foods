import React from 'react'

import { Header } from '../components'

export default function HeaderContainer () {
    return (
      <Header>
        <Header.Banner>
          <Header.Inner>
            <Header.Select>
              <Header.Option>India</Header.Option>
            </Header.Select>
            <Header.Link href="#">Login</Header.Link>
            <Header.Link href="#">Sign up</Header.Link>
          </Header.Inner>
        </Header.Banner>
        <Header.Image src="/images/logo/pkp logo new png1.png" />
      </Header>
    );
}
