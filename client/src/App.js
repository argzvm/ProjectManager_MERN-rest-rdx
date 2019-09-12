import React from 'react';
import { connect } from 'react-redux';
import { authUser } from './store/actions/authActions.js';
import SignedOutApp from './components/SignedOutApp.js';
import SignedInApp from './components/SignedInApp.js';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
    componentWillMount() {
        let token = (localStorage) ? (localStorage.getItem('token')) : null;
        if (token) this.props.authUser(token);
    }
    componentDidMount() {
        setTimeout( function(){}, 1000)
    }
    render() {
        if (this.props.user) {
            return (
                <div className="App">
                    <SignedInApp/>
                </div>
            );
        } else {
            return (
                <div className="App">
                    <SignedOutApp/>
                </div>
            );
        }
    }
}

function mapStateToProps (state) {
    return {
        user: state.auth.user
    };
}

function mapDispatchToProps (dispatch) {
    return {
        authUser: (token) => dispatch( authUser(token) )
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
