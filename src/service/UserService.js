import * as db from '../repository/userRepository.js';

export default async function  saveUser(usuario) {

    let emailLimpo = usuario.email.trim().toLowerCase();
    let usuarioExistente = await db.getEmail(emailLimpo);

    if (usuarioExistente) {
        throw new Error('Esse email já foi cadastrado.');
    }
    
    let id = await db.cadastrarUser(usuario);
    return id;

}

export async  function buscarUserByID(id) {

    if (!id || isNaN(id)) {
        throw new Error('Esse id não existe ou está indisponivel');
    }

    let usuario = await db.buscarUsuarioPorID(id);

    if (!usuario) {

        throw new Error('Usuário não encontrado.');

    }

    delete usuario.senha;
    delete usuario.fotoPerfil
    return usuario;

}

export async function loginUser(email, senha) {
    
    let emailLimpo = email.trim().toLowerCase();

    let usuario = await db.getEmail(emailLimpo);

   
    if (!usuario) {
        throw new Error('E-mail ou senha incorretos.');
    }

    
    if (senha !== usuario.senha) {
        throw new Error('E-mail ou senha incorretos.');
    }

    delete usuario.senha;
    delete usuario.fotoPerfil;

    return usuario;
}