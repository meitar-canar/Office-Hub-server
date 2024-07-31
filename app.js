const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const { checkJwtToken, signIn } = require('./auth/auth'); // Correct import

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/signIn', signIn);

// Use JWT token middleware for routes starting with /auth
app.use('/auth', checkJwtToken);

const paymentRoutes = require('./routes/payMentRoutes');
app.use('/auth/payments', paymentRoutes);

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

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
