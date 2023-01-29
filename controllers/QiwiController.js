import QiwiBillPaymentsAPI from '@qiwi/bill-payments-node-js-sdk'


export const createPayment = async (req, res) => {
    const SECRET_KEY = 'eyJ2ZXJzaW9uIjoiUDJQIiwiZGF0YSI6eyJwYXlpbl9tZXJjaGFudF9zaXRlX3VpZCI6Im0xcGY4OS0wMCIsInVzZXJfaWQiOiI3OTM4ODY5MTkyNyIsInNlY3JldCI6ImE3YTdiZmY4Yzc5OTA5ZjhjZDVmYjAxMGE1OWNlOGQ5MmM3ZGNhOTJkODA0OWRkM2ZhOTY0N2QwNzZiOTI3ZDgifX0=';
    const qiwiApi = new QiwiBillPaymentsAPI(SECRET_KEY);
    const billId = qiwiApi.generateId();
    const publicKey = '48e7qUxn9T7RyYE1MVZswX1FRSbE6iyCj2gCRwwF3Dnh5XrasNTx3BGPiMsyXQFNKQhvukniQG8RTVhYm3iPuajXbgBuWD7dsZ3zu2WJ5P5mSMPzbxuGLLAmHDD6AwbsshS42LLYp2BesJZBBHMr9BfLJRqvHGLq1UooF3rJGe8EHrZ6qkYLwKAEmyjQn';

    const params = {
        publicKey,
        amount: 1,
        billId: billId,
        successUrl: 'https://test.ru',
        lifetime: '2023-01-28T1344'
    };

    const link = await qiwiApi.createPaymentForm(params);
    res.send(link)

}