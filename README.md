m2aircheck is meant to send a text message when the Macbook Air M2 goes on sale.

m2aircheck requires a Twilio account.

Before running the app, you must create a .secrets directory and 
a file called twilio.env inside the secrets directory. 

In the file .secrets/twilio.env, provide the following parameters:

```
# The following can be found on https://console.twilio.com/   

TWILIO_ACCOUNT_SID=...
TWILIO_AUTH_TOKEN=...
TWILIO_PHONE_NUMBER=...

# This is the number that the message will be sent to: 

TO_PHONE_NUMBER=
```

TO_PHONE_NUMBER is the phone where you'll receive messages. 
Make sure that phone will receive and display messages sent
from your TWILIO_PHONE_NUMBER.

To see if Twilio is configured correctly, run:

```
npm run testSms
```

You should reviece a test message with the current date & time.


