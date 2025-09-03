import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const app = express();
const port = process.env.PORT || 3000; 

app.get('/', (req: Request, res: Response) => {
  res.send('Olá, mundo com Express e TypeScript!');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

//teste