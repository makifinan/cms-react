import React from 'react'
import {  Grid } from 'semantic-ui-react'
import RequestList from '../pages/RequestList'

import LeftBar from './LeftBar'
import Navi from './Navi'
import { Route,  Routes } from 'react-router-dom'
import RequestDetail from '../pages/RequestDetail'
import DeveloperDetail from '../pages/DeveloperDetail'
import CreateCall from '../pages/CreateCall'

export default function Dashboard() {
    return (
        <div className='dashboard'>
            <Navi />
            <Grid >
                <Grid.Row >
                    <Grid.Column width={4}>
                        <LeftBar />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <div className='menumargin'>
                            
                            <Routes>
                            <Route exact path='/' Component={RequestList}/>
                            <Route exact path='/requests' Component={RequestList}/>
                            <Route exact path='/requests/:id' Component={RequestDetail}/>
                            <Route exact path='/developeruser/:id' Component={DeveloperDetail}/>
                            <Route exact path='/createcall' Component={CreateCall}/>
                            </Routes>
                            
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
