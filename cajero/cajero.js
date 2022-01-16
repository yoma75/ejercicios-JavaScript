var saldo = 0,
    deposito, retiro;

    function depositar() {
        deposito = parseFloat(document.getElementsByName("deposito")[0].value);
        saldo = saldo + deposito;
    }

    function retirar() {
        retiro = parseFloat(document.getElementsByName("retiro")[0].value);
        saldo = saldo - retiro;    
    }

    function verificar() {
        document.getElementsByName("verificacion")[0].value = saldo;
    }