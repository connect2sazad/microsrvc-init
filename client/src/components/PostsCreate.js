import React, { useState } from 'react';
import axios from 'axios';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function PostsCreate() {
    const [title, setTitle] = useState();

    const onSubmit = async event => {
        event.preventDefault();

        var res = await axios.post('http://127.0.0.1:4000/posts', {
            title
        });
        
        window.location.href = '.';
    }

    return (
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        className="form-control"
                    />
                </div>
                <button className="btn btn-primary mt-2">Submit</button>
            </form>
    );
};

export default PostsCreate;

