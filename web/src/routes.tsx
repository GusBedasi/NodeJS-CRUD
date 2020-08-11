import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Register from './pages/Register';
import UserList from './pages/UserList' ;

function Routes() {
    return(
        <BrowserRouter>
            <Route path="/" component={Register} exact/>
            <Route path="/users" component={UserList}/>
        </BrowserRouter>
    );
}

export default Routes;