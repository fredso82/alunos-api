const express = require("express");
const { swaggerUi, swaggerSpec } = require('./swagger');

const { create, update, remove, findAll, find } = require('./respositories/alunoRepository.js');

const app = express();
const port = 3000;

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.post('/alunos', (req, res) => {
    const { nome, email, nomeCurso } = req.body;
    const aluno = create({ nome, email, nomeCurso });
    res.status(201).json(aluno);
});


/**
 * @swagger
 * /alunos:
 *   get:
 *     summary: Consulta de alunos
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Hello, World!"
 */
app.get('/alunos', (req, res) => {
    const alunos = findAll();
    res.json(alunos);
});

app.get('/alunos/:id', (req, res) => {
    const { id } = req.params;
    const aluno = find(id);
    if (aluno) {
        res.json(aluno);
    }
    res.status(404);
});


app.put('/alunos/:id', (req, res) => {
    const { id } = req.params;
    const { nome, email, nomeCurso } = req.body;
    const aluno = update(id, { nome, email, nomeCurso });
    res.json(aluno);
});

app.delete('/alunos/:id', (req, res) => {
    const { id } = req.params;
    remove(id);
    res.status(204).send();
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});