import React from 'react'
import { Menu, MenuItem } from 'semantic-ui-react'
import Account from './Account'
import Notification from './Notification'
import {  NavLink } from 'react-router-dom'

export default function Navi() {
  return (
    <div  >
      
      <Menu className='navi' style={{backgroundColor:'rgb(255,71,71)'}} >
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
