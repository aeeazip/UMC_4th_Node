const express = require('./config/express');
const {logger} = require('./config/winston');

const port = 4000;
const app = express();
app.listen(port, ()=>{
    logger.info(`Server Start At Port ${port}`);
});