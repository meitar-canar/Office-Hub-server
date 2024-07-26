var express = require('express');
var app = express();
const cookieParser = require('cookie-parser');
const auth = require('./auth/auth');
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// this must be first
app.use('/auth', (req, res, next) => {
    auth.checkJwtToken(req, res);
    next();
});

app.post('/signIn', (req, res) => {
    auth.signIn(req, res);
})
const emailRoutes = require('./routes/emailRoutes');
app.use('/api', emailRoutes);

const usersRoutes = require('./routes/usersRoutes');
app.use('/auth/users', usersRoutes);
app.use('/users', usersRoutes);

const orderRoutes = require('./routes/orderRoutes');
app.use('/auth/order', orderRoutes);
app.use('/order', orderRoutes);

const officeRoutes = require('./routes/officeRoutes');
app.use('/auth/office', officeRoutes);
app.use('/office', officeRoutes);

const detailRoutes = require('./routes/detailRoutes');
app.use('/auth/detail', detailRoutes);
app.use('/detail', detailRoutes);

const requestRoutes = require('./routes/requestRoutes');
app.use('/auth/request', requestRoutes);
app.use('/request', requestRoutes);

const calendarRoutes = require('./routes/calendarRoutes');
app.use('/auth/calendar', calendarRoutes);
app.use('/calendar', calendarRoutes);

app.use(express.static('build'));
//=================================================
const port = process.env.PORT || 3001;

app.listen(port, function () {
    console.log(`My app is listening on port ${port}!`);
});