import express from 'express';
import Connection from './database.js';

const server = express();
server.listen(3000, console.log('Servidor rodando na porta 3000...'));

try {
    await Connection.authenticate();
    console.log('Conectado ao Banco de Dados com sucesso!')
} catch (error) {
    console.error(error)
}