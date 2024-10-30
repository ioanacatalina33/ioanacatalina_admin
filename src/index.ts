import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config(); // Load environment variables from .env file
import albumRoutes from './routes/location.routes';
import articleRoutes from './routes/article.routes';

const port = process.env.PORT || 30002;

const app = express();

console.log(app);

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
dbConnect();

albumRoutes(app);
articleRoutes(app);

app.listen(port, () => {
    console.log('server listening on port 8080');
});

console.log('process.env.MONGODB_URI ', process.env.MONGODB_URI);
async function dbConnect() {
    // check if we have a connection to the database or if it's currently
    // connecting or disconnecting (readyState 1, 2 and 3)
    if (mongoose.connection.readyState >= 1) {
        return;
    }
    if (process.env.MONGODB_URI)
        return mongoose
            .connect(process.env.MONGODB_URI, {
                // useNewUrlParser: true,
                // useUnifiedTopology: true,
                // useFindAndModify: false,
                // useCreateIndex: true,
                // auto_reconnect: true
            })
            .then(() => console.log('Connected to MongoDB'))
            .catch((err) => console.error('Failed to connect to MongoDB', err));
}
