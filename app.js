const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const sequelize = require('./util/database')

const generalRoutes = require('./routes/storeRoutes')
const waiterRoutes = require('./routes/waiterRoutes')

var cors = require('cors')

const app = express()

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(waiterRoutes)
app.use(generalRoutes)

sequelize.sync()
    .then(() => {
        console.log('Database and tables synced');
        app.listen(3000)
    })
    .catch((err) => {
        console.error('Error syncing database:', err);
    });





