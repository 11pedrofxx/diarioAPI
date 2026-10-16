import connection from './connection.js'

export async function postNota(nota) {

    const command = `
        insert into diario (usuario_id, titulo, anotacao, data_nota, categoria, frasedia, avaliacao) 
        values (?, ?, ?, ?, ?, ?, ?)
    `;

    let resposta = await connection.query(command, [
        nota.usuario_id,
        nota.titulo,
        nota.anotacao,
        nota.data_nota,
        nota.categoria,
        nota.frasedia,
        nota.avaliacao
    ]);
    
    let info = resposta[0];
    let id = info.insertId;

    return id;
}

export async function buscarNotasPorUsuarioId(usuario_id) {

    const command = `
        select * from diario
        where usuario_id = ?
    `;

    const [linhas] = await connection.query(command, [usuario_id]);

    return linhas;
}

export async function getNotaPorId(id) {

    const command = `
        select * from diario
        where id = ?
    `;

    const [linhas] = await connection.query(command, [id]);

    return linhas[0];
}

export async function putNota(id, nota) {

    const command = `
        update diario
        set titulo = ?, anotacao = ?, data_nota = ?, categoria = ?, frasedia = ?, avaliacao = ?
        where id = ?
    `;

    let resposta = await connection.query(command, [
        nota.titulo,
        nota.anotacao,
        nota.data_nota,
        nota.categoria,
        nota.frasedia,
        nota.avaliacao,
        id
    ]);

    let info = resposta[0];
    return info.affectedRows;
}

export async function deleteNota(id) {

    const command = `
        delete from diario
        where id = ?
    `;

    let resposta = await connection.query(command, [id]);
    let info = resposta[0];
    return info.affectedRows;
}

export async function buscarNotasPorCategoria(categoria) {

    const command = `
        select * from diario
        where categoria = ?
    `;

    const [linhas] = await connection.query(command, [categoria]);

    return linhas;
}


export async function buscarNotasPorAvaliacao() {

    const command = `
        select * from diario
        order by avaliacao desc
    `;

    const [linhas] = await connection.query(command);

    return linhas;
}