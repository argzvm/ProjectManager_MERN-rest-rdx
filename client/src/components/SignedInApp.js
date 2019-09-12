import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { fetchSInStoreData } from '../store/actions/fetchActions.js'
import SignedInNavbar from './navbar/SignedInNavbar.js';
import Dashboard from './dashboard/Dashboard.js';
import ProjectCreate from './projects/ProjectCreate.js';
import ProjectList from './projects/ProjectList.js';
import ProjectDetails from './projects/ProjectDetails.js';
import ProjectUpdate from './projects/ProjectUpdate.js';
import ProjectDelete from './projects/ProjectDelete.js';
import UserLogin from './users/UserLogin.js';
import UserLogout from './users/UserLogout.js';
import UserDetails from './users/UserDetails.js';
import UserUpdate from './users/UserUpdate.js';
import UserDelete from './users/UserDelete.js';

class SignedInApp extends React.Component {
    componentDidMount() {
        console.log("signedInApp");
        this.props.fetchSInStoreData(this.state);
    }
    render() {
        return (
            <BrowserRouter>
                <div className="SignedInApp">
                    <SignedInNavbar/>
                    <Switch>
                        <Route exact path="/" component={Dashboard}/>
                        <Route path="/projects/create" component={ProjectCreate}/>
                        <Route path="/projects/list" component={ProjectList}/>
                        <Route path="/projects/project/:id" component={ProjectDetails}/>
                        <Route path="/projects/update/:id" component={ProjectUpdate}/>
                        <Route path="/projects/delete/:id" component={ProjectDelete}/>
                        <Route path="/users/login" component={UserLogin}/>
                        <Route path="/users/logout" component={UserLogout}/>
                        <Route path="/users/user" component={UserDetails}/>
                        <Route path="/users/update" component={UserUpdate}/>
                        <Route path="/users/delete" component={UserDelete}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

function mapDispatchToProps (dispatch) {
    return {
        fetchSInStoreData: (data) => dispatch( fetchSInStoreData(data) )
    };
}

export default connect(null, mapDispatchToProps)(SignedInApp);
