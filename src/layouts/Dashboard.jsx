import React, { useState } from 'react'
import {  Grid } from 'semantic-ui-react'
import RequestList from '../pages/RequestList'
import LeftBar from './LeftBar'
import Navi from './Navi'
import User from './User'
import { Route,  Routes } from 'react-router-dom'
import RequestDetail from '../pages/RequestDetail'
import DeveloperDetail from '../pages/DeveloperDetail'
import CreateCall from '../pages/CreateCall'

export default function Dashboard() {

    const [denemeDeveloper,setHandleDenemeDeveloper] = useState({})

   const handleDenemeChange = (developerId=-1) => {
        console.log(developerId )
        setHandleDenemeDeveloper(developerId )
    }
    
    return (
        <div className='dashboard'>
            
            <Navi />
            <Grid >
                <Grid.Row >
                    <Grid.Column width={4}>
                        <LeftBar />
                        <User handleDenemeChange={handleDenemeChange}/>
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <div className='menumargin'>
                            
                            <Routes>
                            <Route exact path='/' Component={RequestList}/>
                            <Route exact path='/requests' Component={RequestList}/>
                            <Route path="/requests/:id" element={<RequestDetail  denemeDeveloper={denemeDeveloper}/>} />
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
