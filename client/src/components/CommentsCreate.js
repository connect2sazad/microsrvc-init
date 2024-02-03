import React, { useState } from "react";
import axios from "axios";

function CommentsCreate({ postId }) {

    const [content, setContent] = useState();

    const onSubmit = async (event) => {
        event.preventDefault();
        const res = await axios.post(`http://127.0.0.1:4001/posts/${postId}/comments`, {
            content
        });
        window.location.href = '.';
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="comment">Add a Comment</label>
                    <input
                        type="text"
                        id="comment"
                        className="form-control"
                        value={content}
                        onChange={e => setContent(e.target.value)} />
                </div>
            </form>
        </>
    );
}

export default CommentsCreate;