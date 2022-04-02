import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {

    constructor(cliente, agencia) {
        super(0, cliente, agencia)
    }

    //sobreescrevendo o comportamento de sacar da classe mãe.
    sacar(valor) {
        let taxa = 1.1;
        return super._sacar(valor, taxa);
    }
}