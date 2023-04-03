import React from 'react'
import { Button } from 'semantic-ui-react'

export default function ButtonGroup() {
    return (
        <div className='buttongroup'>
            <Button.Group  size='large'>
                <Button>Tüm Çağrılar</Button>
                <Button>Zamanı Yaklaşanlar</Button>
                <Button>Zamanı Geçenler</Button>
                <Button>Atama Bekleyenler</Button>
                <Button>Atama Yapılanlar</Button>
                <Button>Çözüldü</Button>
            </Button.Group>
            
        </div>
    )
}
