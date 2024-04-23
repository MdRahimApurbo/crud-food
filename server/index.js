// Import Needed Modules
const app = require('./app');
const dotenv = require('dotenv');

// Load environment variables from config file
dotenv.config({path:'./.env'});

// Start server
app.listen(process.env.RUNNING_PORT, function() {
    console.log("Api Running Port: " + process.env.RUNNING_PORT);
});
