import React from 'react'
import { Container, Grid } from 'semantic-ui-react'
import RequestList from '../pages/RequestList'
import ButtonGroup from './ButtonGroup'
import LeftBar from './LeftBar'
import Navi from './Navi'

export default function Dashboard() {
    return (
        <div className='dashboard'>
            <Navi />
            
                <Grid >
                    <Grid.Row >
                        <Grid.Column width={4}>
                            <LeftBar />
                        </Grid.Column>
                        <Grid.Column  width={12}>
                            <div className='menumargin'>
                            <ButtonGroup />
                            <RequestList />
                            </div>
                        </Grid.Column>

                    </Grid.Row>


                </Grid>
            


        </div>
    )
}
