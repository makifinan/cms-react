import React, { useState, useEffect } from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'
import DeveloperUserService from '../services/DeveloperUserService'
import {  Link, NavLink } from 'react-router-dom'

export default function LeftBar() {

  const [developers, setDevelopers] = useState([])

  useEffect(() => {
    let developerService = new DeveloperUserService();
    developerService.getDeveloperUsers().then(result => setDevelopers(result.data))
  },[])
  return (
    <div>
      <Menu vertical >
        <Menu.Item
          name='account'

        />
        <Link to={"/createcall"}><Menu.Item 
          name='Çağrı Oluştur'

        /></Link>
        <Menu.Item vertical="true">
        <Dropdown text='Geliştiriciler'>
          <Dropdown.Menu>
            {
              developers.map((developer) => (
                
                <Dropdown.Item key={developer.id}>
                  <Link to={`/developeruser/${developer.id}`}>{developer.firstName + ' ' + developer.lastName}</Link>
                </Dropdown.Item>
                
              )
              )
            }

          </Dropdown.Menu>
        </Dropdown>
        </Menu.Item>
        
      </Menu>
    </div>
  )
}
