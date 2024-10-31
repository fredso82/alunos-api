const {v4: uuidv4} = require('uuid');

let alunos = [];

function create({nome, email, nomeCurso}){
    const aluno = {
        id: uuidv4(),
        nome,
        email,
        nomeCurso
    };
    alunos.push(aluno);

    return aluno;
}

function update(id, {nome, email, nomeCurso}) {
    const index = alunos.findIndex(aluno => aluno.id === id);
    if (index === -1) {
        return null;
    }

    alunos[index] = { id, nome, email, nomeCurso};
    return alunos;
}

function remove(id) {
    const index = alunos.findIndex(aluno => aluno.id === id);

    if (index === -1) {
        return false;
    }

    alunos.splice(index, 1);

    return true;
}

function findAll() {
    return alunos;
}

function find(id) {
    const index = alunos.findIndex(aluno => aluno.id === id);
    if (index === -1) {
        return null;
    }

    return alunos[index];
}

module.exports = {
    create,
    update,
    remove,
    findAll,
    find
}