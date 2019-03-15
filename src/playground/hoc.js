import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarnig = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p> This is private info. Please dont share!</p>}
            <WrappedComponent {...props} />
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (

                <WrappedComponent {...props} />
            ) : (
                <p>Please log in to view the info</p>
            )}
        </div>
    );
};


const AdminInfo = withAdminWarnig(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render (<AuthInfo isAuthenticated = {true} info = "There are the details" />, document.getElementById('app'));