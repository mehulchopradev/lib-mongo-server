const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { init } = require('./dbconnect');
const BookModel = require('./models/book');

const app = express();
const PORT = 3002;

app.use(bodyParser.json());
app.use(cors());

app.get('/books', async (req, res) => {
    const books = await BookModel.find();
    res.status(200).send(books.map(({id, title}) => ({id, title})));
});

app.get('/books/:book_id', async (req, res) => {
    const book = await BookModel.findById(req.params.book_id);
    res.status(200).send(book);
});

app.put('/books/:book_id', async (req, res) => {
    const response = await BookModel.findByIdAndUpdate(req.params.book_id, req.body, { new: true });
    res.status(200).send(response);
});

app.post('/books', async (req, res) => {
    const book = req.body;
    const newbook = await BookModel.create(book);
    res.status(201).send(newbook);
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
    init();
});