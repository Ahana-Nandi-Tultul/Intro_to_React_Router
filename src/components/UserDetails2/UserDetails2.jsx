import React, { use } from 'react';

const UserDetails2 = ({userDetailsPromise}) => {
    const user = use(userDetailsPromise);
    const {name, username} = user
    return (
        <div>
            <p><small>Username:{username}</small></p>
            <p>{name}</p>
        </div>
    );
};

export default UserDetails2;