const express = require('express');

var cors = require('cors')
const port = process.env.PORT || 5000;
var bodyParser = require('body-parser')


const accountSid = 'AC50b48f8c09f827012acf1009ca46c427';
const authToken = 'c418f9e2038bc6d13688d565b9df8bd2'

const app = express();

const client = require('twilio')(accountSid, authToken)

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));



// create a GET route
app.post('/user', (req, res) => {
   
  
//
client.messages.create({
    from: 'whatsapp:+14155238886',
    body: `${req.body.imya} ${req.body.nomer} `,
    to: 'whatsapp:+79186130104'

}).then(message => console.log(">>>>>>>>>>"+message.status))
console.log(req.body)
res.send({ express: req.body});
//
});