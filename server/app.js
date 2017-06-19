import express from 'express';

const app = express();

app.get('/sosoliushka', (req, res) => res.send('o(^_^)o'));
app.listen(8080, () => console.log('server successfuly do it ^_^'));