import React from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

function Notifications (props) {
    let { notifications } = props;
    return (
        (notifications) ? (
            <div className="lastprojects section" >
                { notifications.map( (notification) => (
                    <div className="p-3 my-2 rounded bg-docs-transparent-grid" key={notification._id}>
                        <Toast>
                        <ToastHeader>
                            { notification.username }
                        </ToastHeader>
                        <ToastBody>
                            { notification.message }
                            { notification.title || null }
                            { notification.created || notification.modified }
                        </ToastBody>
                        </Toast>
                    </div>


                    // <div className="card text-info bg-light mb-3" key={notification._id}>
                    //     <div className="card-body">
                    //         <h5 className="card-title">{ notification.username }</h5>
                    //         <p className="card-text">{ notification.message }</p>
                    //         <p className="card-text">{ notification.title || null }</p>
                    //         <p className="card-text">{ notification.created || notification.modified }</p>
                    //     </div>
                    // </div>
                ))}
            </div>
        ) : null
    )
};

export default Notifications;


                    // <div className="card text-info bg-light mb-3" key={notification._id}>
                    //     <div className="card-body">
                    //         <h5 className="card-title">{ notification.username }</h5>
                    //         <p className="card-text">{ notification.message }</p>
                    //         <p className="card-text">{ notification.title || null }</p>
                    //         <p className="card-text">{ notification.created || notification.modified }</p>
                    //     </div>
                    // </div>