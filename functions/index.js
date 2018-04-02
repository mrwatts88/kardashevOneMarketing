const functions = require('firebase-functions');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// const nodeMailer = require('nodemailer');
// let transporter = nodeMailer.createTransport({
//     service: 'gmail',
//     port: 465,
//     secure: true,
//     auth: {
//         user: 'matthew.watts.mw@gmail.com',
//         pass: 'Muktown1!!'
//     }
// });


app.use(bodyParser.json())
app.post('/contact', (req, res) => {
    // var mailOptions = {
    //     from: 'matthew.watts.mw@gmail.com',
    //     to: 'matthew.watts.mw@gmail.com',
    //     subject: 'KardashevOne',
    //     text: req.body
    // };

    // transporter.sendMail(mailOptions, function (error, info) {
    //     if (error) {
    //         console.log(error);
    //     }
    // });

    console.log(req.body);

    res.send({ 'data': 'hello from /contact' });
})

exports.app = functions.https.onRequest(app);