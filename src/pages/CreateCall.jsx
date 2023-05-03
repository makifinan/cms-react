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
            label='Title'
            placeholder='Title'
          />
          <Form.Select
            control={Select}
            label='Priority'
            
            placeholder='Priority'
          />
          <Form.Select
            control={Select}
            label='Developer'
            
            placeholder='Developer'
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
          label='Description'
          placeholder='Tell us more about you...'
        />
        
        <Form.Field control={Button}>Create</Form.Field>
      </Form>
    </div>
  )
}
