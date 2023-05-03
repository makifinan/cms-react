import React from 'react'
import { Menu, MenuItem } from 'semantic-ui-react'
import Account from './Account'
import Notification from './Notification'
import { Link, NavLink } from 'react-router-dom'

export default function Navi() {
  return (
    <div className='navi' style={{backgroundColor:'#808080'}}>
      
      <Menu >
        <Menu.Item >
        <p className='pZiraat'>ZİRAAT TEKNOLOJİ</p>
        
        </Menu.Item >
        
          <Menu.Item as={NavLink} to="/"
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
