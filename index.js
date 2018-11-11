const path = require('path'),
  express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
app.use(express.static(path.resolve(__dirname, 'build')));

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

app.get('*', function(req, res) {
  res.redirect('/');
});
