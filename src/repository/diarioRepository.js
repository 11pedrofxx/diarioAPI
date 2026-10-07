import connection from './connection.js'

export async function postNota(nota) {

   const command = `
        INSERT INTO diario (usuario_id, titulo, anotacao, data_nota, categoria, frasedia, rule, avaliacao) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    let resposta = await connection.query(command, [
        nota.usuario_id,
        nota.titulo,
        nota.anotacao ?? null,
        nota.data_nota ?? null,
        nota.categoria ?? null,
        nota.frasedia ?? null,
        nota.rule ?? null,
        nota.avaliacao ?? null
    ]);
    
    let info = resposta[0];
    let id = info.insertId;
    return id;

}