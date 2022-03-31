class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    _saldo;

    sacar(valor){
        if(this._saldo >= valor){
            this.saldo -= valor;
        }
    }
    depositar(valor){
        if(valor > 0){
            this._saldo += valor;
        }
    }
}

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

const ContaCorrenteRicardo = new ContaCorrente();
ContaCorrenteRicardo.saldo = 0;
ContaCorrenteRicardo.agencia = 1001;