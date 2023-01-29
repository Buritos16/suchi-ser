import QiwiBillPaymentsAPI from '@qiwi/bill-payments-node-js-sdk'


export const createPayment = async (req, res) => {
    const SECRET_KEY = 'eyJ2ZXJzaW9uIjoiUDJQIiwiZGF0YSI6eyJwYXlpbl9tZXJjaGFudF9zaXRlX3VpZCI6Im0xcGY4OS0wMCIsInVzZXJfaWQiOiI3OTM4ODY5MTkyNyIsInNlY3JldCI6ImE3YTdiZmY4Yzc5OTA5ZjhjZDVmYjAxMGE1OWNlOGQ5MmM3ZGNhOTJkODA0OWRkM2ZhOTY0N2QwNzZiOTI3ZDgifX0=';
    const qiwiApi = new QiwiBillPaymentsAPI(SECRET_KEY);
    const billId = qiwiApi.generateId();
    const publicKey = '48e7qUxn9T7RyYE1MVZswX1FRSbE6iyCj2gCRwwF3Dnh5XrasNTx3BGPiMsyXQFNKQhvukniQG8RTVhYm3iPuajXbgBuWD7dsZ3zu2WJ5P5mSMPzbxuGLLAmHDD6AwbsshS42LLYp2BesJZBBHMr9BfLJRqvHGLq1UooF3rJGe8EHrZ6qkYLwKAEmyjQn';

    const date = new Date(Date.now() + 7200000)
    let Y = date.getFullYear().toString()
    let M = (date.getMonth() + 1).toString()
    if (date.getMonth() < 10) {
        M = `0${date.getMonth() + 1}`
    }
    let D = (date.getDate()).toString()
    if (date.getDate() < 10) {
        D = `0${date.getDate()}`
    }
    let h = (date.getHours()).toString()
    if (date.getHours() < 10) {
        h = `0${date.getHours()}`
    }
    let m = date.getMinutes().toString()
    if (date.getMinutes() < 10) {
        m = `0${date.getMinutes()}`
    }
    let life = `${Y}-${M}-${D}T${h}${m}`

    const params = {
        publicKey,
        amount: req.query.amount,
        email: req.query.email,
        billId: billId,
        successUrl: 'https://cloudsushi.ru',
        account: req.query.account,
        lifetime: encodeURIComponent(life)
    };

    const link = await qiwiApi.createPaymentForm(params);
    res.send(link)

}