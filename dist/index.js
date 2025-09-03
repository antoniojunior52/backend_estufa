import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import userRoutes from './routes/userRoutes.js'; // Importa o novo roteador
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env') });
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json()); // Middleware para parsear o corpo das requisições como JSON
// Rotas para a API de usuários
app.use('/users', userRoutes);
app.get('/', (req, res) => {
    res.send('Olá, mundo com Express e TypeScript!');
});
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map