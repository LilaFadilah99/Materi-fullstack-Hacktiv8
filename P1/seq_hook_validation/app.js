const express = require('express');
const app = express();
const PORT = 3000;
const routes = require('./routes');
const formatDate = require('./helpers/formateDate');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.locals.formatDateToEjs = formatDate;

// app.get('/', (req, res) => {
//   res.send('Hallow');
// })

app.use('/', routes);

app.listen(PORT, () => {
  console.log(`I Love You ${PORT}`);
})