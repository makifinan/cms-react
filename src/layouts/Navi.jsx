import React from 'react'
import { Menu, MenuItem } from 'semantic-ui-react'
import Account from './Account'
import Notification from './Notification'

export default function Navi() {
  return (
    <div className='navi'>
      
      <Menu inverted>
        <Menu.Item >
        <p className='pZiraat'>ZİRAAT TEKNOLOJİ</p>
        
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
        
      </Menu>
    </div>
  )
}
