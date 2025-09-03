import express from 'express';
const app = express();
const port = process.env.PORT;
app.get('/', (req, res) => {
    res.send('Olá, mundo com Express e TypeScript!');
});
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map