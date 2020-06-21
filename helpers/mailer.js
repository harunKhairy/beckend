const nodemailer = require('nodemailer')

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'harun.khairy@gmail.com',
        pass: 'weonuiowhokkpxso'
    },
    tls: {
        rejectUnauthorized: false
    }
})

module.exports = transporter 
