import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
import { Request, Response } from 'express';

app.get('/', (req: Request, res: Response) => res.send('Hello World!'));

app.listen(3000, () => {
	  console.log('Server is running on port 3000');
});