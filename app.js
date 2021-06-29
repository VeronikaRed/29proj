const express = require('express');
const {PORT} = require('./config');
const userRoutes = require('./routes/user');
const cardRoutes = require('./routes/card');
const checkErrors = require('./middleware/checkErrors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({
        extended: true,
    })
);

app.use("/users",  userRoutes);
app.use("/cards",  cardRoutes);

app.use(checkErrors);

app.listen(PORT, () => console.log(`Server has been started on port ${PORT}...`));

module.exports = app;