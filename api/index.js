/**
 * This the starting point of our node app
 * 
 */

import express from 'express';
import bodyParser from 'body-parser';
import playerRoutes from './server/routes/playerRoutes';

//General Config 
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const port = process.env.PORT || 8000;

//Define all routes here
app.use('/players', playerRoutes);

// when a random route is inputed
app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to this API.',
  }));

app.listen(port, () => {
    console.log(`Server is running on PORT ${port}`);
});
export default app;