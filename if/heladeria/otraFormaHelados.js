"use strict";

const definirCompra = (n) => {
   let dinero = prompt(`Dinero de ${n}`);
   if (dinero >= 0.6 && dinero < 1) return (`${n}: helado de agua`);
   if (dinero >= 1 && dinero < 1.6) return (`${n}: helado de crema`);
   if (dinero >= 1.6 && dinero < 1.7) return (`${n}: helado de heladix`);
   if (dinero >= 1.7 && dinero < 1.8) return (`${n}: helado de fresa`);
   if (dinero >= 1.8 && dinero < 2.9) return (`${n}: helado de guama`);
   if (dinero >= 2.9) return (`${n}: helado de confites o pote 1/4kg`);
   else return (`${n} No te alcanza para ningun heladito`);
}

console.log(definirCompra("Cofla"));
console.log(definirCompra("Roberto"));
console.log(definirCompra("Pedro"));
