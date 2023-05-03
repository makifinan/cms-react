import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button, Card, Dropdown, Icon } from 'semantic-ui-react'
import RequestService from '../services/RequestService'
import PriorityService from '../services/PriorityService'
import StatuService from '../services/StatuService';
import DeveloperUserService from '../services/DeveloperUserService'


export default function RequestDetail() {
    let { id } = useParams({})
    let optionsPriorities = []
    let optionsStatus = []
    const [request, setRequest] = useState({})
    const [priorities, setPriorities] = useState([])
    const [status, setStatus] = useState([])
    const [developers, setDevelopers] = useState([])

    useEffect(() => {
        let requestService = new RequestService()
        requestService.getById(id).then((result) => {
            setRequest(result.data)


        })

        let priorityService = new PriorityService()
        priorityService.getPriorities().then((result) => {
            setPriorities(result.data)
            optionsPriorities = priorities.map((priority) => ({
                key: priority.id,
                text: priority.priorityName,
                value: 3,
            }));
        })
        
        let statuService = new StatuService()
        statuService.getListStatu().then((result) => {
            setStatus(result.data)
        })

        let developerUserService = DeveloperUserService()
        developerUserService.getDeveloperUsers().then((result) => {
            setDevelopers(result.data)
        })

    }, [])
    
   
    debugger;
    /* priorities.map((priority) => {
        optionsPriorities = [
            { key: priority.id, text: priority.priorityName, value: 3 }
            


        ]
        debugger;
    }

    )*/

    const options = [
        { key: 1, text: 'Atama Bekliyor', value: 1 },
        { key: 2, text: 'Atama Yapıldı', value: 2 },
        { key: 3, text: 'Çözüldü', value: 3 },
    ]

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
                            <Dropdown text={request.priorityId}
                                placeholder='Öncelik'
                                closeOnEscape
                                selection
                                options={priorities.map((priority) => ({
                                    key: priority.id,
                                    text: priority.priorityName,
                                    value: 3,
                                }))}
                            />

                        </Card.Description>
                        <Card.Description style={{margin:'1em'}} > Developer :
                            <Dropdown text={request.developerUserId}
                                placeholder='Developer'
                                closeOnEscape
                                selection
                                options={developers.map((developer) => ({
                                    key: developer.id,
                                    text: developer.firstName + ' ' + developer.lastName,
                                    value: 3,
                                }))}
                                
                            >
                                
                            </Dropdown>

                        </Card.Description>
                        <Card.Description style={{margin:'1em'}}> Durum :

                            <Dropdown text={request.statuId}
                                placeholder='Durum'
                                closeOnEscape
                                selection
                                options={options}
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
