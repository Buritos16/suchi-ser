import express from 'express';
import * as QiwiController from "./controllers/QiwiController.js";
import cors from 'cors'

const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello')
})
app.get('/qiwi/create', QiwiController.createPayment);

app.listen(process.env.PORT || 4444, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log('Server OK')
})