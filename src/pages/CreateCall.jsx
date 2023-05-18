import React from 'react'
import {
    Button,
    Checkbox,
    Form,
    Input,
    Select,
    TextArea,
  } from 'semantic-ui-react'

export default function CreateCall() {
  return (
    <div className='createcall'>
        <Form>
        <Form.Group widths='equal'>
          <Form.Field
            control={Input}
            label='Başlık'
            placeholder='Başlık'
          />
          <Form.Select
            control={Select}
            label='Öncelik'
            placeholder='Öncelik'
          />
          <Form.Select
            control={Select}
            label='Geliştirici'
            
            placeholder='Geliştirici'
          />
        </Form.Group>
        <Form.Group inline>
          <label>Statu</label>
          <Form.Field
            control={Checkbox}
            label='Atama Bekliyor'
            
           
            
          />
          <Form.Field
            control={Checkbox}
            label='Atama Yapıldı'
            
            
            
          />
          <Form.Field
            control={Checkbox}
            label='Çözüldü'
            
            
            
          />
        </Form.Group>
        <Form.Field
          control={TextArea}
          label='Açıklama'
          placeholder='Açıklama Giriniz...'
        />
        
        <Form.Field control={Button}>Oluştur</Form.Field>
      </Form>
    </div>
  )
}
