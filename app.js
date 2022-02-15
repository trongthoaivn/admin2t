const express = require('express');
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors');
const hbs = require('hbs');
const path = require('path');
const routerAdmin = require('./config/routerAdmin');
const db = require('./config/database');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(session())
app.use('/public', express.static(__dirname + '/public'));
app.set('view engine', 'hbs');
app.use('/admin', routerAdmin)

db.sequelize.sync({ force: false }).then(() => {}).catch(err => {
    console.log(err);
})

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.listen(3000, () => {
    console.log('Server started on port 3000');
});