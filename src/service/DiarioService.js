import * as db from '../repository/diarioRepository.js';

export default async function salvarNota(nota) {

    if (!nota.usuario_id) {
        throw new Error('Identificação do usuário é obrigatória.');
    }

    if (!nota.titulo || String(nota.titulo).trim() === '') {
        throw new Error('Título da nota é obrigatório.');
    }

    let resposta = await db.postNota(nota);
    let id = resposta?.insertId ?? resposta;
    return id;

}

export { salvarNota };

