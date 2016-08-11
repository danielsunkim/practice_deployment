var express = require('express');
var app = express();
const PORT =  process.env.PORT || 3000;

// open weather map API, open weather map only operates on HTTP and not HTTPS.
app.use((req, res, next) => {
  if (req.headers['x-forwarded-proto'] === 'http') {
    next();
  } else {
    res.redirect('http://' + req.hostname + req.url);
  }
});
console.log(PORT);
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
});
