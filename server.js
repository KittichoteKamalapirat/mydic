const express = require('express');
const app = express();
const connectDB = require('./config/db');
const PORT = process.env.PORT || 2000;

// before deploy
const path = require('path');

connectDB();

app.use(express.json({ extended: false }));

app.use('/api/words', require('./routes/api/words'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  //Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'cleitn', 'build', 'index.html'));
  });
}
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
