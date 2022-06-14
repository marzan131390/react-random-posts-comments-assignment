import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import Post from '../Post/Post';
const Posts = () => {
    const [posts, setPosts] = useState([]);
    let {userId} = useParams();
    userId = parseInt(userId);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => setPosts(data));
    }, [])
   const targetUserPosts = posts.filter(post => post.userId === userId)
    return (
        <div>
            {
                targetUserPosts.map((userPosts) => <Post userPosts={userPosts}></Post>)
            }
        </div>
    );
};

export default Posts;