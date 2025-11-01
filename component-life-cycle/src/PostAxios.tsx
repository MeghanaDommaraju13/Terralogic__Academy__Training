import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Post {
    id: number;
    title: string;
    body: string;
}

function PostAxios() {
    const [posts, setPosts] = useState<Post[]>([]);//define the type here

    useEffect(() => {
        axios
        .get<Post[]>('https://jsonplaceholder.typicode.com/posts') 
        .then(response => {
        setPosts(response.data);
    })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }, []);

    return (
        <ul>
        {posts.map(post => (
        <li key={post.id}>{post.title}</li>
    ))}
        </ul>
    );
}

export default PostAxios;