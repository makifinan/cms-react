
import React, { useEffect, useState } from 'react'
import { Icon, Menu, Table } from 'semantic-ui-react'
import RequestService from '../services//RequestService.js'
import { Link } from 'react-router-dom';
export default function RequestList() {

    const [requests, setRequests] = useState([])

    useEffect(() => {
        let requestService = new RequestService();
        requestService.getRequests()
            .then((result) => {
                setRequests(result.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);



    return (
        <div>
            <Table className='table' celled>
                <Table.Header>
                    <Table.Row >
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
                        requests && requests.map((request) => (
                            
                                <Table.Row key={request.id}>
                                   <Link to={`/requests/${request.id}`}> <Table.Cell>{request.title}</Table.Cell></Link>
                                    <Table.Cell>{request.generatedDate}</Table.Cell>
                                    <Table.Cell>{request.endDate}</Table.Cell>
                                    <Table.Cell>{request.developerUserId}</Table.Cell>
                                    <Table.Cell>{request.priorityId}</Table.Cell>
                                    <Table.Cell>{request.statuId}</Table.Cell>
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
        </div>
    )
}
