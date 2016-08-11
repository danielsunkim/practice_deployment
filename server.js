let express = require('express');
let app = express();
const PORT =  process.env.PORT;

app.use((req, res, next) => {
  if (req.headers['x-forwarded-proto'] === 'http') {
    next();
  } else {
    req.redirect('http://' + req.hostname + req.url);
  }
});

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log('Listening on port ', PORT);
});
