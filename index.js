const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

//require('dotenv').config();

app.use(bodyParser.json());
app.use(cors());

const db = require('./db');
const Post = require('./models/post');

db.authenticate()
    .then(() => {
        console.log('Database connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

db.sync()
    .then(() => {
        console.log('Models synchronized with the database.');
    })
    .catch(err => {
        console.error('Unable to sync models with the database:', err);
    });

const postsRoutes = require('./routes/posts');
app.use('/api/posts', postsRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});