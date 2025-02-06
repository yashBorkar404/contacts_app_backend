const express = require('express');
const dotnev = require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
const connectDb = require('./config/dbConnection');

connectDb();
app.use(express.json());
app.use('/api/contacts', require('./routes/contact_routes'));
app.use('/api/users',require('./routes/user_routes'))
app.use(require('./middleware/errorHandler'));
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
