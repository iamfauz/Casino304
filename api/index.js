import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

// Setting up environment variables
dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 8000;

// when a random route is inputed
app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to this API.'
}));

app.listen(port, () => {
    console.log(`Server is running on PORT ${port}`);
});
export default app;