import 'dotenv/config';
import mongoose from 'mongoose';
import app from './app.js';

// Connect to the MongoDB database using the URI from environment variables
mongoose.connect(process.env.MONGO_URI, {
  dbName: 'RESTAURANT',
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})
  .then(() => {
    console.log('Database connected successfully');
  })
  .catch(err => {
    console.error('Some error occurred while connecting to the database:', err);
  });

// Start the server on the port specified in the environment variables or default to 4000
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`SERVER HAS STARTED AT PORT ${port}`);
});
