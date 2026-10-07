import { Router } from "express";

import salvarNota from "../service/DiarioService.js";

const endpoints = Router();

endpoints.post('/diario', async (req, resp) => {

    try {

        let nota = req.body;
        let id = await salvarNota(nota);
        resp.send(id);

    } catch (error) {
        resp.status(400).send(ErrorDefault(error));
    }

});

export default endpoints;