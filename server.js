const mongoose = require('mongoose');
const cors = require('cors');
const fs = require('fs');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

// .connect(process.env.DATABASE_LOCAL, {
mongoose.set('strictQuery', true);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
  })
  .then((con) => {
    // console.log(con.connection);
    console.log('DB connection successful ...');
  });

const data = JSON.parse(fs.readFileSync(`stockdata.json`));
console.log();

const getThisStock = (req, res) => {
  res.status(200).json({
    status: 'success',
    message: { data },
  });
};

// app.get('./stockdata', getThisStock);
// app.get('/message', (req, res) => {
//   res.json({ message: 'hello' });
// });

const port = 3000 || process.env.PORT;

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
