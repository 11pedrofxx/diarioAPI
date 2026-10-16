import { Router } from "express";
import * as db from "../service/DiarioService.js";

const endpoints = Router();

endpoints.post('/diario', async (req, resp) => {
    try {
        let nota = req.body;
        let id = await db.salvarNota(nota);
        resp.send(id);

    } catch (error) {
        resp.status(400).send(ErrorDefault(error));
    }
});

endpoints.get('/diario', async (req, resp) => {
    try {
        let usuario_id = req.query.usuario_id;

        let notas = await db.listarNotas(usuario_id);

        resp.send(notas);

    } catch (error) {
        resp.status(400).send(ErrorDefault(error));
    }
});

endpoints.put('/diario/:id', async (req, resp) => {
    try {
        let id = req.params.id;
        let nota = req.body;
        let resultado = await db.atualizarNota(id, nota);
        resp.status(200).send(resultado);

    } catch (error) {
        resp.status(400).send(ErrorDefault(error));
    }
});

endpoints.delete('/diario/:id', async (req, resp) => {
    try {
        let id = req.params.id;
        let usuario_id = req.body.usuario_id;
        let resultado = await db.deletarNota(id, usuario_id);
        resp.status(204).send(resultado);

    } catch (error) {
        resp.status(400).send(ErrorDefault(error));
    }
});

endpoints.get('/diario/categoria/:categoria', async (req, resp) => {
    try {
        let categoria = req.params.categoria;

        let notas = await db.listarNotasPorCategoria(categoria);

        resp.send(notas);

    } catch (error) {
        resp.status(400).send(ErrorDefault(error));
    }
});


endpoints.get('/diario/avaliacao', async (req, resp) => {
    try {
        let notas = await db.listarNotasPorAvaliacao();

        resp.send(notas);

    } catch (error) {
        resp.status(500).send(ErrorDefault(error));
    }
});

export default endpoints;
