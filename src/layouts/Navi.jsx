import React from 'react'
import { Menu, Container, MenuItem } from 'semantic-ui-react'
import Account from './Account'
import Notification from './Notification'

export default function Navi() {
  return (
    <div>
      
      <Menu>
        <p className='pZiraat'>ZİRAAT TEKNOLOJİ</p>
        <Container>
          


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
