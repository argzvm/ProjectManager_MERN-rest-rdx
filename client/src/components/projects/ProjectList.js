import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText } from 'reactstrap';

function ProjectList (props) {
    let { projects } = props;
    return (
        (projects) ? (
            <div className="container project-list section mt-3 mb-5">
                { projects.map( (project) => (
                    <Card className="mb-3" key={ project._id }>
                        <CardHeader>
                        {(project.private) ? "PRIVATE  " : null} posted by: { project.username }
                        </CardHeader>
                        <CardBody>
                            <CardTitle tag="h3">{ project.title }</CardTitle>
                            <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</CardText>
                            <Link to={'/projects/project/' + project._id}>
                                <Button color="primary">Check it!</Button>
                            </Link>
                        </CardBody>
                        <CardFooter>{ project.modified }</CardFooter>
                    </Card>
                ))}
            </div>
        ) : null
    )
};

function mapStateToProps (state) {
    return {
        projects: state.data.projects
    };
}

export default connect(mapStateToProps)(ProjectList);
