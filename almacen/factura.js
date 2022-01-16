function multiplicar() {
    let numero1 = parseInt($('#numero1').val());
    let numero2 = parseInt($('#numero2').val());
    let multiplicar = numero1 * numero2;
    $('#subtotal').text(multiplicar);
}        

function ivaa() {
    let numero1 = parseInt($('#numero1').val());
    let numero2 = parseInt($('#numero2').val());
    let iva = ((numero1 * numero2) * 19) / 100;            
    $('#iva').text(iva);
}       

function totalPagar() {
    let numero1 = parseInt($('#numero1').val());
    let numero2 = parseInt($('#numero2').val());
    let multiplicar = numero1 * numero2;
    let iva = ((numero1 * numero2) * 19) / 100; 
    let totalPagar = iva + multiplicar;
    $('#total').text(totalPagar);
}
