import React, { useState, useEffect } from "react";
import axios from "axios";

function CommentsShow({ postId }) {

    const [comments, setComments] = useState({});

    const getComments = async () => {
        const res = await axios.get(`http://127.0.0.1:4001/posts/${postId}/comments`);
        setComments(res.data);
    }

    useEffect(() => {
        getComments();
    }, [])

    const renderedComments = Object.values(comments).map((comment) => {
        return(
            <li key={comment.id}>
                {comment.content}
            </li>
        );
    });

    return (
        <ul>
            {renderedComments}
        </ul>
    );
}

export default CommentsShow;