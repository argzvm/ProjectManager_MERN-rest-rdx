import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { fetchSOutStoreData } from '../store/actions/fetchActions.js'
import SignedOutNavbar from './navbar/SignedOutNavbar.js';
import Homepage from './homepage/Homepage.js';
import UserSignup from './users/UserSignup.js';
import UserLogin from './users/UserLogin.js';

class SignedOutApp extends React.Component {
    componentDidMount() {
        console.log("signedOutApp");
        this.props.fetchSOutStoreData(this.state);
    }
    render() {
        return (
            <BrowserRouter>
                <div className="SignedOutApp">
                    <SignedOutNavbar/>
                    <Switch>
                        <Route exact path="/" component={Homepage}/>
                        <Route path="/users/signup" component={UserSignup}/>
                        <Route path="/users/login" component={UserLogin}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

function mapDispatchToProps (dispatch) {
    return {
        fetchSOutStoreData: (data) => dispatch( fetchSOutStoreData(data) )
    };
}

export default connect(null, mapDispatchToProps)(SignedOutApp);
