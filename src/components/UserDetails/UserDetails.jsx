import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData();
    const {website, name} = user;

    // const params = useParams();
    // console.log(params);
    const {userId} = useParams();
    // console.log(userId);
    return (
        <div>
            <h2>User Details</h2>
            <h5>{name}</h5>
            <p>{website}</p>
        </div>
    );
};

export default UserDetails;