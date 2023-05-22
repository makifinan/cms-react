
import React, { useEffect, useState } from 'react'
import { Button, Icon, Menu, Table } from 'semantic-ui-react'
import RequestService from '../services//RequestService.js'
import { Link } from 'react-router-dom';
export default function RequestList() {

    const [requests, setRequests] = useState([])
    const [filter, setFilter] = useState('tumu')
    const [filteredRequests, setFilteredRequests] = useState([])

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

    useEffect(() => {
        const currentDate = new Date();
        
        if (filter === 'tumu') {
            setFilteredRequests(requests);
        } else if (filter === 'zamani yaklasanlar') {
            const upcomingRequests = requests.filter((request) => isUpcoming(request.endDate));
            setFilteredRequests(upcomingRequests);
        } else if (filter === 'zamani gecen') {
            const expiredRequests = requests.filter((request) => isExpired(request.endDate));
            setFilteredRequests(expiredRequests);
        } else if (filter === 'atama bekleyen') {
            const pendingRequests = requests.filter((request) => request.statuName === 'Atama Bekliyor');
            setFilteredRequests(pendingRequests);
        } else if (filter === 'cozuldu') {
            const resolvedRequests = requests.filter((request) => request.statuName === 'Çözüldü');
            setFilteredRequests(resolvedRequests);
        }
    }, [requests, filter])

    const isExpired = (endDate) => {
        const currentDate = new Date();
        return new Date(formatDate(endDate)) < currentDate;
      };
    
      const isUpcoming = (endDate) => {
        const currentDate = new Date();
        return new Date(formatDate(endDate)) > currentDate;
      };
    
      const formatDate = (dateString) => {
        const [day, month, year] = dateString.split('.');
        return `${month}/${day}/${year}`;
      };
    
    const handleFilterChange = (newFilter) => {
        setFilter(newFilter)
    }
    const getRowColor = (status) => {
        switch (status) {
          case 'Atama Bekliyor':
            return 'yellow';
          case 'Çözüldü':
            return 'green';
          default:
            return 'white';
        }
      };
    /*const isExpired = (endDate) => {
        const currentDate = new Date();
        return new Date(endDate) < currentDate;
      };*/

    return (
        <div>
            <div className='buttongroup '>

                <Button onClick={() => { handleFilterChange('tumu') }}>Tüm Çağrılar</Button>
                <Button onClick={() => { handleFilterChange('zamani yaklasanlar') }}>Zamanı Yaklaşanlar</Button>
                <Button onClick={() => { handleFilterChange('zamani gecen') }}>Zamanı Geçenler</Button>
                <Button onClick={() => { handleFilterChange('atama bekleyen') }}>Atama Bekleyenler</Button>
                <Button onClick={() => { handleFilterChange('cozuldu') }}>Çözüldü</Button>

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
                        filteredRequests && filteredRequests.map((request) => (

                            <Table.Row key={request.id} style={{ backgroundColor: isExpired(request.endDate) ? 'red' : getRowColor(request.statuName) }}
                             >
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
