import React, { useEffect, useState } from 'react'
import { Dropdown } from 'semantic-ui-react';
import DeveloperUserService from '../services/DeveloperUserService';

export default function User({handleDenemeChange}) {

  
    const [developerlist,setDeveloperlist] = useState([])
    const [selectedDeveloper,setSelectedDeveloper] = useState('')

  useEffect(() => {
    let developerService = new DeveloperUserService()
    developerService.getDeveloperUsers().then((result) => {
      setDeveloperlist(result.data)
    })
    
    //console.log(developerlist)
    
  }, [])

  const handleDropdownChange = (event,data) => {
    
    setSelectedDeveloper(data.value)
    if(data.value){
handleDenemeChange(data.value)
    }
    
   
    
  }
  //console.log(selectedDeveloper)

  
  return (
    <div>
      <h3>Developer Kullanıcısı Seç:</h3>
      <Dropdown
        placeholder="Seçiniz"
        selection
        options={developerlist.map((developer) => ({
          key: developer.id,
          text: developer.firstName + ' ' + developer.lastName,
          value: developer.firstName + ' ' + developer.lastName,
      }))}
      onChange={handleDropdownChange}
        
      />
    </div>
  )
}
