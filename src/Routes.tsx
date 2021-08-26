import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import DoacaoPage from './pages/instituto/telaDoacao'



function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={DoacaoPage}/>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;