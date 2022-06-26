import twilio from 'twilio';
import dotenv from 'dotenv';

dotenv.config({ path: '.secrets/twilio.env' })

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const fromNumber = process.env.TWILIO_PHONE_NUMBER;
const toNumber = process.env.TO_PHONE_NUMBER;

const twilioClient = twilio(accountSid, authToken);

export const sendMessage = (message) => {
    twilioClient.messages
        .create({
            body: message,
            from: fromNumber,
            to: toNumber
        })
        .then(message => {
            console.log("message: " + JSON.stringify(message));
        });
}
