import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export function IsUserRedirect({ user, loggedInPath, children, ...rest }) {
    return (
        <Route
            {...rest}
            render={() => {
                if (!user) {
                    return children;
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: loggedInPath,
                            }}
                        />
                    );
                }
            }}
        />
    );
}

export function ProtectedRoute({ user, children, ...restProps }) {

    let userObj = user ? JSON.parse(user) : null;

    return (
        <Route
            {...restProps}
            render={({ location }) => {

                if (userObj) {
                    if (userObj.roles.includes(restProps.role)) {
                        return children;
                    }
                    else {
                        return (
                            <Redirect
                                to={{
                                    pathname: 'error',
                                    state: { from: location },
                                }}
                            />
                        );
                    }
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: 'signin',
                                state: { from: location },
                            }}
                        />
                    );
                }
                
            }}
        />
    )
}