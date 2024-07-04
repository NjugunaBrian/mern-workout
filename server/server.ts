import express, { Request, Response } from "express";
import dotenv from "dotenv";
import router from './routes/workouts';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const PORT = 4000 || process.env.PORT;


//middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})
//routes
app.get('/', (req: Request, res: Response) => {
    res.send("Hello World!");
});
app.use('/api/workouts', router)

//connect to db
mongoose.connect(process.env.MONGO_URI!)
.then(() => {
    app.listen(PORT, () => {
        console.log(`Connected to db & Server is running on port ${PORT}`);
    });
})
.catch((error) => {
    console.log(error)
});

