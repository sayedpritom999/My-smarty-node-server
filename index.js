const express = require('express');
var cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())

const users = [
    { id: 1, name: "khalid", email: "designer.khalid@gmail.com", phone: "0177232372" },
    { id: 2, name: "hasan", email: "designer.hasan@gmail.com", phone: "0177232372" },
    { id: 3, name: "jibon", email: "designer.jibon@gmail.com", phone: "0177232372" },
    { id: 4, name: "ahmed", email: "designer.ahmed@gmail.com", phone: "0177232372" },
    { id: 5, name: "baky", email: "designer.baky@gmail.com", phone: "0177232372" },
    { id: 6, name: "tareq", email: "designer.tareq@gmail.com", phone: "0177232372" },
]

// app.get('/users', (req, res) => {
//     console.log("query", req.query)
//     res.send(users)
// })

app.get('/users', (req, res) => {
    if(req.query.name) {
        const search = req.query.name.toLocaleLowerCase();
        const matched = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(matched);
    } else {
        res.send(users)
    }
})
app.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId)
    res.send(user)
})

app.post('/user', (req, res) => {
    console.log("req", req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user)
    res.send(user)
})

app.listen(port, () => {
    console.log("listening on port " + port)
});