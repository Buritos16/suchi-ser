import express from 'express';
import * as QiwiController from "./controllers/QiwiController.js";
import cors from 'cors'
import TelegramBot from 'node-telegram-bot-api'

const token = '5825748265:AAFdu9j9doZ50K-ZbgR_jrINWpm-E1x1HsE'
export const bot = new TelegramBot(token, {polling: true})

bot.onText(/\/id (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    console.log(chatId)
})

const app = express();
app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    res.send('Hello')
})
app.get('/qiwi/create', QiwiController.createPayment);

app.post('/bot/send', QiwiController.sendMessageBot);

app.listen(process.env.PORT || 4444, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log('Server OK')
})