import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';
import CreateOrpahanage from './pages/CreateOrpahanage';
import Orphanage from './pages/Orphanage';
import Success from './pages/Success';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import DashBoard from './pages/DashBoard/ShowOrphanages';
import PendingEntries from './pages/DashBoard/PendingEntries';
import EditOrphanage from './pages/DashBoard/EditOrphanage';
import NewOrphanage from './pages/DashBoard/NewOrphanage';
import DeleteOrphanage from './pages/DashBoard/DeleteOrphanage';
import NotFound from './pages/NotFound';
;

const Routes = () => {

  return (

    <BrowserRouter>
      <Switch>

        <Route exact path='/' component={Landing}/>

        <Route exact path='/app' component={OrphanagesMap}/>

        <Route exact path='/orphanage/create' component={CreateOrpahanage}/>

        <Route exact path='/orphanage/:id' component={Orphanage}/>

        <Route exact path='/orphanage/create/success' component={Success}/>

        <Route exact path='/restrict/login' component={Login}/>

        <Route exact path='/restrict/forgotpassword' component={ForgotPassword}/>

        <Route exact path='/restrict/dashboard/orphanages' component={DashBoard}/>

        <Route exact path='/restrict/dashboard/orphanages/new-orphanage' component={NewOrphanage}/>

        <Route exact path='/restrict/dashboard/orphanages/delete-orphanage' component={DeleteOrphanage}/>

        <Route exact path='/restrict/dashboard/pending' component={PendingEntries}/>
        
        <Route exact path='/restrict/dashboard/pending/edit' component={EditOrphanage}/>
        <Route exact path='/*' component={NotFound}/>
        

      </Switch>
    </BrowserRouter>

  );

};


export default Routes;