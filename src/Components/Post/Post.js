import React from 'react';
import { Link } from 'react-router-dom';
import './Post.css';
const Post = (props) => {
    const posts= props.userPosts;
    // console.log(posts);
    const {title, body, id} = posts;
    return (
        <div className="Post-container">
            <h4>{title}</h4>
            <p>{body}</p>
            <Link to={`/comments/${id}`}><button className='custom-btn comments'>See All Comments</button></Link>
            
        </div>
    );
};

export default Post;