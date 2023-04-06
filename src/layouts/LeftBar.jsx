import React, { useState, useEffect } from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'
import DeveloperUserService from '../services/DeveloperUserService'

export default function LeftBar() {

  const [developers, setDevelopers] = useState([])

  useEffect(() => {
    let developerService = new DeveloperUserService();
    developerService.getDeveloperUsers().then(result => setDevelopers(result.data))
  })
  return (
    <div>
      <Menu vertical >
        <Menu.Item
          name='account'

        />
        <Menu.Item
          name='Çağrı Oluştur'

        />
        <Menu.Item vertical="true">
        <Dropdown text='Geliştiriciler'>
          <Dropdown.Menu>
            {
              developers.map((developer) => (
                <Dropdown.Item key={developer.id}>
                  {developer.firstName + ' ' + developer.lastName}
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
