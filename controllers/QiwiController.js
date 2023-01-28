import axios from 'axios'
import QiwiBillPaymentsAPI from '@qiwi/bill-payments-node-js-sdk'


export const createPayment = async (req, res) => {
    try {
        const SECRET_KEY = 'eyJ2ZXJzaW9uIjoiUDJQIiwiZGF0YSI6eyJwYXlpbl9tZXJjaGFudF9zaXRlX3VpZCI6Im0xcGY4OS0wMCIsInVzZXJfaWQiOiI3OTM4ODY5MTkyNyIsInNlY3JldCI6ImE3YTdiZmY4Yzc5OTA5ZjhjZDVmYjAxMGE1OWNlOGQ5MmM3ZGNhOTJkODA0OWRkM2ZhOTY0N2QwNzZiOTI3ZDgifX0=';
        const qiwiApi = new QiwiBillPaymentsAPI(SECRET_KEY);
        const billId = qiwiApi.generateId();

        const fields = {
            amount: 1.00,
            currency: 'RUB',
            comment: 'test',
            expirationDateTime: '2023-01-28T13:44:07'
        };

        await qiwiApi.createBill( billId, fields).then( data => {
            console.log(data)
            res.send(data)
        });

    } catch (err) {
        console.log(err);
    }
}