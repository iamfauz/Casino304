/**
 * This the starting point of our node app
 * 
 */

import express from 'express';
import bodyParser from 'body-parser';
import playerRoutes from './server/routes/playerRoutes';
import gameRoutes from './server/routes/gameRoutes';
import gamePlayRoutes from './server/routes/gamePlayRoutes';
import aggregateRoutes from './server/routes/aggregateRoutes';

//General Config 
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const port = process.env.PORT || 8000;

//Define all routes here
app.use('/players', playerRoutes);
app.use('/games', gameRoutes);
app.use('/gameplays', gamePlayRoutes);
app.use('/aggregate', aggregateRoutes);

app.listen(port, () => {
    console.log(`Server is running on PORT ${port}`);
});
export default app;