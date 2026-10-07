import connection from "./connection.js";

export async function cadastrarUser(usuario) {

    const command = `
    
    insert into usuario (nome, email, senha)
    values (?, ?, ?)

    `

    let resposta = await connection.query((command) , [

        usuario.nome,
        usuario.email,
        usuario.senha

    ]);

    let info = resposta[0];
    let UserID = info.insertId;
    return UserID;
    

}

export async function getEmail(email) {


    const command = `

    select * from usuario
    where email = ?

    `

    let resposta = await connection.query(command, [email]);
    let registros = resposta[0];

    return registros[0];

}

export async function buscarUsuarioPorID (id) {

    const command = `
    
    select * from usuario
    where id = ?

    `
    
    const [linhas] = await connection.query(command, [id])
    return linhas[0];

}