let express = require('express');
let app = express();
const PORT =  process.env.PORT;

// open weather map API, open weather map only operates on HTTP and not HTTPS.
app.use((req, res, next) => {
  if (req.headers['x-forwarded-proto'] === 'http') {
    next();
  } else {
    res.redirect('http://' + req.hostname + req.url);
  }
});

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log('Listening on port ', PORT);
});
