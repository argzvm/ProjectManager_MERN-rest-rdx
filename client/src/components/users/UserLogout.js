import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../store/actions/authActions.js';


class UserLogout extends React.Component {
    componentDidMount() {
        this.props.logoutUser();
        this.props.history.push('/');
    }
    render() {
        return null;
    }
}

function mapDispatchToProps (dispatch) {
    return {
        logoutUser: () => dispatch( logoutUser() )
    };
}

export default connect(null, mapDispatchToProps)(UserLogout);
