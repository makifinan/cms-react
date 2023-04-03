import React from 'react'
import {  Dropdown } from 'semantic-ui-react'


export default function Notification() {
  return (
    <div>
      <Dropdown icon={'bell'} item >
            <Dropdown.Menu>
              <Dropdown.Item>uyarı1</Dropdown.Item>
              <Dropdown.Item>uyarı2</Dropdown.Item>
              <Dropdown.Item>uyarı3</Dropdown.Item>
            </Dropdown.Menu>
      </Dropdown>

    </div>
  )
}
