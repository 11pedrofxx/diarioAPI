export function validarId(id) {

    if (!id || isNaN(Number(id))) {
        throw new Error('ID da nota inválido.');
    }

}

export function validarUsuarioId(usuario_id) {

    if (!usuario_id) {
        throw new Error('Identificação do usuário é obrigatória.');
    }

}

export function validarTitulo(titulo) {

    if (!titulo || String(titulo).trim() === '') {
        throw new Error('Título da nota é obrigatório.');
    }

}

export function validarNotaExistente(nota) {

    if (!nota) {
        throw new Error('Nota não encontrada.');
    }

}