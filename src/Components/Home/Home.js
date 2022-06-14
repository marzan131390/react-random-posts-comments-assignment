import React, { useEffect, useState } from 'react';
import Users from '../Users/Users';
import './Home.css';
const Home = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])
    
    // https://jsonplaceholder.typicode.com/posts
    // https://jsonplaceholder.typicode.com/comments
    // https://jsonplaceholder.typicode.com/users
    return (
        <div className="Home-container">
            <h1>Users List</h1>
            {
                users.map(user => <Users user={user}></Users>)
            }
        </div>
    );
};

export default Home;