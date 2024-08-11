const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json(), express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'form.html'));
});

app.post('/submit', (req, res) => {
    // Updated regex to ensure separators (spaces or hyphens) are used
    const phoneRegex = /^\d{3}[ -]\d{3}[ -]\d{4}$/;
    const phoneNumber = req.body.phoneNumber;
    if (phoneRegex.test(phoneNumber)) {
        res.send(`Thank you, ${req.body.name}. Your phone number has been successfully validated!`);
    } else {
        res.send("The phone number is invalid. It must be in the format: xxx-xxx-xxxx or xxx xxx xxxx.");
    }
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
