import * as db from '../repository/diarioRepository.js';

import { validarId, validarUsuarioId, validarTitulo, validarNotaExistente } from '../validation/DiarioValidation.js';


export async function salvarNota(nota) {

    validarUsuarioId(nota.usuario_id);
    validarTitulo(nota.titulo);

    let id = await db.postNota(nota);

    return id;

}


export async function listarNotas(usuario_id) {

    validarUsuarioId(usuario_id);

    let notas = await db.buscarNotasPorUsuarioId(usuario_id);

    return notas;
}


export async function atualizarNota(id, nota) {

    validarId(id);
    validarUsuarioId(nota.usuario_id);
    validarTitulo(nota.titulo);

    let existente = await db.getNotaPorId(id);

    validarNotaExistente(existente);

    let afetadas = await db.putNota(id, nota);

    if (afetadas === 0) {
        throw new Error('Nota não encontrada.');
    }

    return { id: Number(id) };

}


export async function deletarNota(id, usuario_id) {

    validarId(id);
    validarUsuarioId(usuario_id);

    let existente = await db.getNotaPorId(id);

    validarNotaExistente(existente);

    if (Number(existente.usuario_id) !== Number(usuario_id)) {
        throw new Error('Esta nota não pertence ao usuário informado.');
    }

    let afetadas = await db.deleteNota(id);

    if (afetadas === 0) {
        throw new Error('Nota não encontrada.');
    }

    return { id: Number(id) };

}

export async function listarNotasPorCategoria(categoria) {

    if (!categoria || String(categoria).trim() === '') {
        throw new Error('Categoria é obrigatória.');
    }

    let notas = await db.buscarNotasPorCategoria(categoria);

    return notas;
}


export async function listarNotasPorAvaliacao() {

    let notas = await db.buscarNotasPorAvaliacao();

    return notas;
}