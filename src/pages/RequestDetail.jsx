import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button, Card, Dropdown, Icon } from 'semantic-ui-react'
import RequestService from '../services/RequestService'
import PriorityService from '../services/PriorityService'
import StatuService from '../services/StatuService';
import DeveloperUserService from '../services/DeveloperUserService'


export default function RequestDetail() {
    let { id } = useParams({})
 
    const [request, setRequest] = useState([])
    const [priorities, setPriorities] = useState([])
    const [status, setStatus] = useState([])
    const [developers, setDevelopers] = useState([])

    useEffect(() => {
        let requestService = new RequestService()
        requestService.getByIdRequestDetail(id).then((result) => {
            setRequest(result.data[0])
            
            console.log(result.data)

        })
        
        let priorityService = new PriorityService()
        priorityService.getPriorities().then((result) => {
            setPriorities(result.data)
            
        })
        
        let statuService = new StatuService()
        statuService.getListStatu().then((result) => {
            setStatus(result.data)
        })

        let developerUserService =new DeveloperUserService()
        developerUserService.getDeveloperUsers().then((result) => {
            setDevelopers(result.data)
        })

    }, [])
    
    return (
        <div className='requestdetail'>
            <Card.Group >
                <Card fluid>
                    <Card.Content>
                        <Icon />
                        <Card.Header>{request.title}</Card.Header>
                        <Card.Meta>Oluşturulma Tarihi : {request.generatedDate}</Card.Meta>
                        <Card.Meta>Son Tarih : {request.endDate}</Card.Meta>
                        <Card.Description>
                            Açıklama : {request.description}
                        </Card.Description>
                        <div style={{margin:'1em'}}>
                        <Card.Description > Öncelik :
                            <Dropdown text={request.priorityName}
                                placeholder='Öncelik'
                                closeOnEscape
                                selection
                                options={priorities.map((priority) => ({
                                    key: priority.id,
                                    text: priority.priorityName,
                                    value: priority.priorityName,
                                }))}
                            />

                        </Card.Description>
                        <Card.Description style={{margin:'1em'}} > Developer :
                            <Dropdown text={request.firstName + " "+request.lastName}
                                placeholder='Developer'
                                closeOnEscape
                                selection
                                options={developers.map((developer) => ({
                                    key: developer.id,
                                    text: developer.firstName + ' ' + developer.lastName,
                                    value: developer.firstName,
                                }))}
                                
                            >
                                
                            </Dropdown>

                        </Card.Description>
                        <Card.Description style={{margin:'1em'}}> Durum :

                            <Dropdown text={request.statuName}
                                placeholder='Durum'
                                closeOnEscape
                                selection
                                options={status.map((statu) => ({
                                    key: statu.id,
                                    text: statu.statuName,
                                    value: statu.statuName,
                                }))}
                            />

                        </Card.Description>
                        </div>

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
