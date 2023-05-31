import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button, Card, Dropdown, Icon } from 'semantic-ui-react'
import RequestService from '../services/RequestService'
import PriorityService from '../services/PriorityService'
import StatuService from '../services/StatuService';
import DeveloperUserService from '../services/DeveloperUserService'
import axios from 'axios'


export default function RequestDetail({ denemeDeveloper }) {
    let { id } = useParams({})

    const [request, setRequest] = useState([])
    const [priorities, setPriorities] = useState([])
    const [status, setStatus] = useState([])
    const [developers, setDevelopers] = useState([])
    const [selectedPriority, setSelectedPriority] = useState('')
    const [selectedDeveloper, setSelectedDeveloper] = useState('')
    const [selectedStatus, setSelectedStatu] = useState('')
    const [requestId, setRequestId] = useState({})

    console.log("gelen veri:" +  JSON.stringify(denemeDeveloper))
    console.log(!denemeDeveloper)
    //let gelenDenemeDeveloper=5
    //gelenDenemeDeveloper=denemeDeveloper
    useEffect(() => {
        let requestService = new RequestService()
        requestService.getByIdRequestDetail(id).then((result) => {
            setRequest(result.data[0])

            console.log(result.data)

        })
        requestService.getById(id).then((result) => {
            setRequestId(result.data)
        })

        let priorityService = new PriorityService()
        priorityService.getPriorities().then((result) => {
            setPriorities(result.data)

        })

        let statuService = new StatuService()
        statuService.getListStatu().then((result) => {
            setStatus(result.data)
        })

        let developerUserService = new DeveloperUserService()
        developerUserService.getDeveloperUsers().then((result) => {
            setDevelopers(result.data)
        })



    }, [])

    const handlePriorityChange = (event, data) => {
        setSelectedPriority(data.value);
        console.log(data.value)
    };



    const handleDeveloperChange = (event, data) => {
        const selectedDeveloperId = data.value;
        setSelectedDeveloper(selectedDeveloperId)

        console.log(selectedDeveloperId)
    }
    const handleStatusChange = (event, data) => {
        setSelectedStatu(data.value)
        console.log(data.value)
    }



    const handleUpdateClick = () => {

        let developerUserId = requestId.developerUserId;
        if (selectedDeveloper) {
            developerUserId = encodeURIComponent(selectedDeveloper);
        }

        let statuId = requestId.statuId
        if (selectedStatus) {
            statuId = encodeURIComponent(selectedStatus)
        }

        let priorityId = requestId.priorityId
        if (selectedPriority) {
            priorityId = encodeURIComponent(selectedPriority)
        }

        const description = encodeURIComponent(request.description);
        const endDate = encodeURIComponent(request.endDate);
        const title = encodeURIComponent(request.title);
        const managerUserId = encodeURIComponent(request.managerUserId);
        priorityId = encodeURIComponent(priorityId);
        statuId = encodeURIComponent(statuId);
        const id = encodeURIComponent(request.id);
        developerUserId = encodeURIComponent(developerUserId)



        console.log((selectedDeveloper))

        const url = `http://localhost:5233/api/Requests/update?Description=${description}&EndDate=${endDate}&Title=${title}&ManagerUserId=${managerUserId}&DeveloperUserId=${developerUserId}&PriorityId=${priorityId}&StatuId=${statuId}&Id=${id}`;


        axios
            .post(url)
            .then((response) => {
                console.log('Güncelleme başarılı!');
            })
            .catch((error) => {
                console.error('Güncelleme hatası:', error);
            });
    };

    const control = () => {
        
    }






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
                        <div style={{ margin: '1em' }}>
                            <Card.Description > Öncelik :
                                <Dropdown text={selectedPriority ? priorities.find((priority) => priority.id === selectedPriority)?.priorityName : request.priorityName}
                                    placeholder='Öncelik'
                                    closeOnEscape
                                    selection
                                    options={priorities.map((priority) => ({
                                        key: priority.id,
                                        text: priority.priorityName,
                                        value: priority.id,
                                    }))}
                                    onChange={handlePriorityChange}
                                />

                            </Card.Description>
                            <Card.Description style={{ margin: '1em' }}>
                                Developer :{' '}
                                
                                    <Dropdown
                                        text={
                                            selectedDeveloper
                                                ? developers.find((developer) => developer.id === selectedDeveloper)?.firstName +
                                                ' ' +
                                                developers.find((developer) => developer.id === selectedDeveloper)?.lastName
                                                : request.firstName + ' ' + request.lastName
                                        }
                                        placeholder="Developer"
                                        closeOnEscape
                                        selection
                                        options={developers.map((developer) => ({
                                            key: developer.id,
                                            text: developer.firstName + ' ' + developer.lastName,
                                            value: developer.id,
                                        }))}
                                        disabled={ denemeDeveloper &&  typeof denemeDeveloper !== 'object'  ? true  : false  }
                                        onChange={handleDeveloperChange} 
                                    />
                                
                            </Card.Description>

                            <Card.Description style={{ margin: '1em' }}> Durum :

                                <Dropdown text={selectedStatus ? status.find((statu) => statu.id === selectedStatus)?.statuName : request.statuName}
                                    placeholder='Durum'
                                    closeOnEscape
                                    selection
                                    options={status.map((statu) => ({
                                        key: statu.id,
                                        text: statu.statuName,
                                        value: statu.id,
                                    }))}
                                    disabled={ 
                                        //denemeDeveloper !== request.firstName + ' ' + request.lastName ? true : false
                                        typeof denemeDeveloper === 'object' ? false : (denemeDeveloper !== request.firstName + ' ' + request.lastName ? true : false)

                                    
                                        
                                        
                                    }
                                    onChange={handleStatusChange}
                                />

                            </Card.Description>
                        </div>

                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button basic color='green' onClick={handleUpdateClick}>
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
