
import React, { useEffect, useState } from 'react'
import { Button, Icon, Menu, Table } from 'semantic-ui-react'
import RequestService from '../services//RequestService.js'
import { Link} from 'react-router-dom';
export default function RequestList() {

    const [requests, setRequests] = useState([])
    
    useEffect(() => {
        let requestService = new RequestService();
        requestService.getRequestsDetail()
            .then((result) => {
                setRequests(result.data);
                
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);



    return (
        <div>
            <div className='buttongroup '>

                <Button>Tüm Çağrılar</Button>
                <Button>Zamanı Yaklaşanlar</Button>
                <Button>Zamanı Geçenler</Button>
                <Button>Atama Bekleyenler</Button>
                <Button>Çözüldü</Button>

            </div>
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
                           
                            <Table.Row  key={request.id}>
                                 <Table.Cell><Link to={`/requests/${request.id}`}>{request.title}</Link></Table.Cell>
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
        </div>
    )
}
