import React from 'react';
import { useParams } from 'react-router-dom';


const Post = () => {
    const {id} = useParams(); // Hook to get URL parameters
        return <h2>Post ID: {id}</h2>
    
        
}

export default Post
