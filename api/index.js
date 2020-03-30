import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

// Setting up environment variables
dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 8000;

const Sequelize = require("sequelize");
const connection = new Sequelize(process.env.DATABASE_URL);

// When we hit homepage
app.get('/', (req, res) => res.status(200).send({
    message: 'Welcome to this API.'
}));


// GET route call to get all players
app.get('/players', function (req, res) {
  const query = 'SELECT * FROM players;'
  connection.query(query, { type: connection.QueryTypes.SELECT })
    .then(players => {
      console.log([players])
      res.json(players)
    })
  }
);


app.listen(port, () => {
    console.log(`Server is running on PORT ${port}`);
});
export default app;