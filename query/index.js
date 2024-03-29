const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const port = 4002;
const posts = {};

app.get('/posts', (req, res) => {
    res.send(posts);
});

app.post('/events', (req, res) => {

    const { type, data } = req.body;

    console.log("Received event: "+type);
    

    if(type === 'PostCreated'){
        const { id, title } = data;
        posts[id] = { id, title, comments: [] };
    }

    if(type === 'CommentCreated'){
        const { id, content, postId, status } = data;

        const post = posts[postId];
        post.comments.push({ id, content, status });
    }
    
    if(type === 'CommentUpdated'){
        const { id, content, postId, status } = data;

        const post = posts[postId];
        
        const comment = post.comments.find(comment => {
            return comment.id === id;
        });

        comment.status = status;
        comment.content = content;
    }

    res.send({});
});

app.listen(port, () => {
    console.log('Query Service running at ' + port);
})