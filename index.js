import express from 'express';
import * as QiwiController from "./controllers/QiwiController.js";
import cors from 'cors'

const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello')
})
app.get('/qiwi/create', QiwiController.createPayment);

app.listen(4444, (err) => {
    if (err) {
        console.log('err')
        console.log(err)
        console.log('err end')
        return console.log(err);
    }
    console.log('Server OK')
})