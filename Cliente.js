export class Cliente {
    get CPF(){
        return this._cpf;
    }
    constructor(nome, cpf, senha){
        this.nome = nome;
        this._cpf = cpf
        this._senha = senha;
    }

    autenticar(){
        return true;
    }
}