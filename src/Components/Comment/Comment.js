import React from 'react';
import './Comment.css';
const Comment = (props) => {
    const comment = props.comment;
    // console.log(comment);
    const {name, email, body} = comment;
    return (
        <div className='Comment-container'>
            <h4>{name}</h4>
            <h5>{email}</h5>
            <p>And the comment is</p>
            <h6>{body}</h6>
        </div>
    );
};

export default Comment;