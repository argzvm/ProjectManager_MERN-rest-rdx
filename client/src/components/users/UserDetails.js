import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Jumbotron, Button } from 'reactstrap';

const UserDetails = (props) => {
    let { user } = props;
    return (
        <div>
            <Jumbotron>
                <h1 className="display-5">{ user.username }</h1>
                <p className="lead">{ user.profile }</p>
                <hr className="my-2" />
                <p>Name: { user.fullname }</p>
                <p>Email: { user.email }</p>
                <p>Created at: { user.created }</p>
                <Link to={'/users/update/' + user._id}>
                    <Button color="primary" size="lg">Update</Button>
                </Link>{' '}
                <Link to={'/users/delete/' + user._id}>
                    <Button color="danger" size="lg">Delete</Button>
                </Link>
            </Jumbotron>
        </div>
    )
}

function mapStateToProps (state) {
    return {
        user: state.auth.user
    };
}

export default connect(mapStateToProps)(UserDetails);
