import React, { useEffect, useState } from 'react'
import { Card, Icon, Menu, Table } from 'semantic-ui-react'
import DeveloperUserService from '../services/DeveloperUserService'
import RequestService from '../services/RequestService'
import { Link, useParams } from 'react-router-dom'

export default function DeveloperDetail() {
    let { id } = useParams()


    const [developer, setDeveloper] = useState([])
    const [developersrequests, setDevelopersrequests] = useState([])

    useEffect(() => {
        let developerService = new DeveloperUserService()
        developerService.getById(id).then((result) => {
            setDeveloper(result.data)
        })
        let requestService = new RequestService()
        requestService.getByDeveloperRequestDetail(id).then((result) => {
            setDevelopersrequests(result.data)
        })

    }, [])



    return (
        <div className='developerdetail'>
            <Card fluid>

                <Card.Content>

                    <Card.Header>{developer.firstName + ' ' + developer.lastName}</Card.Header>
                    <Card.Meta>
                        <span className='date'>İşe Giriş Tarihi : {developer.generatedDate}</span><br />
                        <span className='date'>Email : {developer.email}</span><br />
                        <span className='date'>Telefon : {developer.telNo}</span>
                    </Card.Meta>
                    <Card.Description>

                    </Card.Description>
                </Card.Content>
                <Card.Content>
                    <Table celled>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Başlık</Table.HeaderCell>
                                <Table.HeaderCell>Oluşturulma Tarihi</Table.HeaderCell>
                                <Table.HeaderCell>Bitiş Tarihi</Table.HeaderCell>
                                <Table.HeaderCell>Geliştirici</Table.HeaderCell>
                                <Table.HeaderCell>Öncelik</Table.HeaderCell>
                                <Table.HeaderCell>Durum</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {
                                developersrequests.map((request) => (

                                    <Table.Row>
                                        <Table.Cell>
                                        <Link to={`/requests/${request.id}`}>{request.title}</Link>
                                        </Table.Cell>
                                        <Table.Cell>{request.generatedDate}</Table.Cell>
                                        <Table.Cell>{request.endDate}</Table.Cell>
                                        <Table.Cell>{request.firstName + " " + request.lastName}</Table.Cell>
                                        <Table.Cell>{request.priorityName}</Table.Cell>
                                        <Table.Cell>{request.statuName}</Table.Cell>
                                    </Table.Row>
                                ))

                            }
                        </Table.Body>

                        <Table.Footer>
                            <Table.Row>
                                <Table.HeaderCell colSpan='3'>
                                    <Menu floated='right' pagination>
                                        <Menu.Item as='a' icon>
                                            <Icon name='chevron left' />
                                        </Menu.Item>
                                        <Menu.Item as='a'>1</Menu.Item>
                                        <Menu.Item as='a'>2</Menu.Item>
                                        <Menu.Item as='a'>3</Menu.Item>
                                        <Menu.Item as='a'>4</Menu.Item>
                                        <Menu.Item as='a' icon>
                                            <Icon name='chevron right' />
                                        </Menu.Item>
                                    </Menu>
                                </Table.HeaderCell>
                            </Table.Row>
                        </Table.Footer>
                    </Table>
                </Card.Content>
                <Card.Content extra>

                </Card.Content>
            </Card>
        </div>
    )
}
