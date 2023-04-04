import React from 'react'
import { Menu, Container, MenuItem, Image } from 'semantic-ui-react'
import Account from './Account'
import Notification from './Notification'

export default function Navi() {
  return (
    <div>
      <Menu stackable>

        <Container>
          <Menu.Item>
            <Image src='../images/logo.png' />
          </Menu.Item>


          <Menu.Item
            name='Ana Sayfa'

          />
          

          <Menu.Menu position='right'>
            <MenuItem>
              <Notification />
            </MenuItem>

            <Menu.Item>
              <Account />
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  )
}
