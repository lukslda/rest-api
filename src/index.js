const express = require('express');
const app = express();
const router = require('../routes/index');


// Enable express.json
app.use(express.json({ extended: true }));
app.use(express.json());

const PORT = 3000;

// Import routes
app.use(router);

// start app
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});