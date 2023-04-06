import React, { useEffect, useState } from 'react'
import { Card } from 'semantic-ui-react'
import DeveloperUserService from '../services/DeveloperUserService'

export default function DeveloperDetail() {

    const [developer, setDeveloper] = useState([])

    useEffect(() => {
        let developerService = new DeveloperUserService()
        developerService.getDeveloperUsers().then((result) => {
            setDeveloper(result.data)
        })
    }, [])

    return (
        <div>
            <Card>
                <Image src='/images/avatar/large/matthew.png' wrapped ui={false} />
                <Card.Content>
                    {
                        developer.map((developer) => (

                         ))
                    }
                    <Card.Header>Matthew</Card.Header>
                    <Card.Meta>
                        <span className='date'>Joined in 2015</span>
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
