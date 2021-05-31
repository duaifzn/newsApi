import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
app.set('view engine', 'ejs');

app.use(express.static('views'));

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
