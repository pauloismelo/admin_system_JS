//File to run locally
require('dotenv').config()

const app = require('./server');
const port = process.env.PORT_BACKEND;;;

app.listen(port, () => {
  console.log(`Server running locally on http://localhost:${port}`);
});
