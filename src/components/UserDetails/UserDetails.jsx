import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData();
    const {website, name} = user;
    return (
        <div>
            <h2>User Details</h2>
            <h5>{name}</h5>
            <p>{website}</p>
        </div>
    );
};

export default UserDetails;