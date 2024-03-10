import React from "react";

function CommentsShow({ comments }) {

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