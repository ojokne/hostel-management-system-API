import express from 'express'
import cors from 'cors'

const app = express();  

// use middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});


export default app;