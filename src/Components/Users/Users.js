import React from 'react';
import { Link } from 'react-router-dom';
import './Users.css';

const Users = (props) => {
    const user = props.user;
    const {name, id} = user;
    return (
        <div className="Users-container">
            <h3>Hi This is {name}</h3>
            <p>You can checkout <Link to={`/posts/${id}`}>my posts Here</Link>.</p>
        </div>
    );
};

export default Users;