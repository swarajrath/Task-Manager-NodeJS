const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'gulal009@gmail.com',
        subject: 'This is regarding task manager app',
        text: `Welcome to the app, ${name}. Let me know how you enjoyed the application.`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'gulal009@gmail.com',
        subject: 'This is regarding Cancellation of of your account',
        text: `We are soory that you chhose to Cancel our service Mr./Mrs., ${name}. Sorry to see you go. Please let us know what can we do to update our services.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}


