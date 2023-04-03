import React from 'react'
import { Dropdown } from 'semantic-ui-react'

export default function Account() {
  return (
    <div>
      <Dropdown item text='Akif'>
        <Dropdown.Menu>
          <Dropdown.Item>Bilgilerim</Dropdown.Item>
          <Dropdown.Item>Çıkış Yap</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}
