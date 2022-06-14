import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';

const Comments = () => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments")
        .then(response => response.json())
        .then(data => setComments(data))
    }, []);
    // console.log(comments);
    let {commentId} = useParams();
    commentId = parseInt(commentId);
    // console.log(commentId);
    const matchedPostComments = comments.filter(comment => comment.postId === commentId);
    return (
        <div>
            {
                matchedPostComments.map(comment => <Comment comment={comment}></Comment>)
            }
        </div>
    );
};

export default Comments;