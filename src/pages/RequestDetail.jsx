import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button, Card, Dropdown, Icon, Menu } from 'semantic-ui-react'
import RequestService from '../services/RequestService'

export default function RequestDetail() {
    let { id } = useParams({})

    const [request, setRequest] = useState({})

    useEffect(() => {
        let requestService = new RequestService()
        requestService.getById(id).then((result) => {
            setRequest(result.data)
        })

    },[])
    const options = [
        { key: 1, text: 'Atama Bekliyor', value: 1 },
        { key: 2, text: 'Atama Yapıldı', value: 2 },
        { key: 3, text: 'Çözüldü', value: 3 },
      ]

    return (
        <div>
            <Card.Group >
                <Card fluid>
                    <Card.Content>
                        <Icon bell />
                        <Card.Header>{request.title}</Card.Header>
                        <Card.Meta>Oluşturulma Tarihi : {request.generatedDate}</Card.Meta>
                        <Card.Meta>Son Tarih : {request.endDate}</Card.Meta>
                        <Card.Description>
                            Açıklama : {request.description}
                        </Card.Description>
                        <Card.Description> Öncelik : 
                            <Menu compact>
                                <Dropdown text={request.priorityId} options={options} simple item />
                            </Menu>
                        </Card.Description>
                        <Card.Description> Durum : 
                            <Menu compact>
                                <Dropdown text={request.statuId} options={options} simple item />
                            </Menu>
                        </Card.Description>

                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button basic color='green'>
                                Güncelle
                            </Button>
                            <Button basic color='red'>
                                Sil
                            </Button>
                        </div>
                    </Card.Content>
                </Card>

            </Card.Group>
        </div>
    )
}
