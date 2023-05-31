import React, { useState, useEffect } from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'
import DeveloperUserService from '../services/DeveloperUserService'
import {  Link } from 'react-router-dom'

export default function LeftBar() {

  const [developers, setDevelopers] = useState([])

  useEffect(() => {
    let developerService = new DeveloperUserService();
    developerService.getDeveloperUsers().then(result => setDevelopers(result.data))
  },[])
  /* <Link to={"/createcall"}><Menu.Item 
          name='Çağrı Oluştur'

        /></Link>*/
  return (
    <div className='leftbar'>
      <Menu vertical className='leftbar'>
        
        
        <Menu.Item vertical="true" className='leftbar'>
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
