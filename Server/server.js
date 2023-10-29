// app.js (or server.js)
require('dotenv').config()

const express = require('express');
const app = express();
const cors = require('cors');
const ProjectRouter = require('./routes/ProjectRoutes');

const connectDB = require('./db/connect')

const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handeler')

//middleware
app.use(cors());
app.use(express.json())

//routes
app.get('/', (req, res) => {
  res.send('<h1>Hello from the server!</h1> <a href="/api/v1/products">products route</a>');
});

app.use("/api/project",ProjectRouter);

app.use(notFoundMiddleware)
app.use(errorMiddleware)

const port = process.env.PORT || 5000;

const start = async()=>{
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port,console.log(`server is listening of port ${port}`))
  } catch (error) {
    console.log(error)
  }
}

start();
