import React, { useEffect, useState } from 'react'
import { Button, Dropdown } from 'semantic-ui-react';
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
    alert("Kullanıcı Değişti : "+data.value)
    
   
    
  }
  //console.log(selectedDeveloper)

  const manageruser = () => {
    handleDenemeChange({})
    alert("Yönetici Hesabına Geçiş Yapıldı")
    setSelectedDeveloper('')
  }
  return (
    <div className='flex'>
      <br></br>
      <Button onClick={manageruser} color='green'>Yönetici Hesabına Geç</Button>
      <br></br>
      <h3>Kullanıcı Değiştir :</h3>
      <Dropdown 
        text={selectedDeveloper}
        id='dropdown'
        className='kullanıcıdegistir'
        placeholder="Seçiniz"
        selection
        options={developerlist.map((developer) => ({
          key: developer.id,
          text: developer.firstName + ' ' + developer.lastName,
          value: developer.firstName + ' ' + developer.lastName,
      }))}
      value={selectedDeveloper}
      onChange={handleDropdownChange}
        
      />
     
    </div>
  )
}
