import React, { useEffect, useState } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import DeveloperUserService from '../services/DeveloperUserService'
import { useParams } from 'react-router-dom'

export default function DeveloperDetail() {
    let {id} = useParams()


    const [developer, setDeveloper] = useState([])

    useEffect(() => {
        let developerService = new DeveloperUserService()
        developerService.getById(id).then((result) => {
            setDeveloper(result.data)
        })
    }, [])

    return (
        <div>
            <Card fluid>
                <Image src='/images/avatar/large/matthew.png' wrapped ui={false} />
                <Card.Content>
                    
                    <Card.Header>{developer.firstName + ' ' + developer.lastName}</Card.Header>
                    <Card.Meta>
                        <span className='date'>{developer.generatedDate}</span>
                    </Card.Meta>
                    <Card.Description>
                        Matthew is a musician living in Nashville.
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='user' />
                        22 Friends
                    </a>
                </Card.Content>
            </Card>
        </div>
    )
}
