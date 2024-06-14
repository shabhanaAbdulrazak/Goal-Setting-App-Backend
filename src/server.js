const app = require('./app');
const mongoose = require('mongoose');


const PORT = process.env.PORT || 3000;
const MONGO_URI = 'mongodb+srv://shabhana:root@gsa.v4wqp4c.mongodb.net/';

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(err => {
  console.error('MongoDB connection error:', err);
});
