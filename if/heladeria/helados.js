let dineroCofla = prompt('Cuanto dinero tienes Cofla: ');
let dineroRoberto = prompt('Cuanto dinero tienes Roberto: ');
let dineroPedro = prompt('Cuanto dinero tienes Pedro: ');

dineroCofla = parseInt(dineroCofla);

if(dineroCofla >= 0.6 && dineroCofla < 1) {
   alert('Cofla, Comprate el helado de agua');
   alert('y te sobran' + (dineroCofla - 0.6));
}
else if(dineroCofla >= 1 && dineroCofla < 1.6) {
   alert('Cofla, Comprate el helado de crema');
   alert('y te sobran' + (dineroCofla - 1));
}
else if(dineroCofla >= 1.6 && dineroCofla < 1.7) {
   alert('Cofla, Comprate el helado de heladix');
   alert('y te sobran' + (dineroCofla - 1.6));
}
else if(dineroCofla >= 1.7 && dineroCofla < 1.8) {
   alert('Cofla, Comprate el helado de fresa');
   alert('y te sobran' + (dineroCofla - 1.7));
}
else if(dineroCofla >= 1.8 && dineroCofla < 2.9) {
   alert('Cofla, Comprate el helado de Guama');
   alert('y te sobran' + (dineroCofla - 1.8));
}

else if(dineroCofla >= 2.9) {
   alert('Cofla, Comprate helado de confeti o pote')
   alert('y te sobran' + (dineroCofla - 2.9));

}else {
   alert('Cofla, No te alcanza para nada');
}

// ------------Roberto--------------
if(dineroRoberto >= 0.6 && dineroRoberto < 1) {
   alert('Roberto, Comprate el helado de agua');
}
else if(dineroRoberto >= 1 && dineroRoberto < 1.6) {
   alert('Roberto, Comprate el helado de crema');
}
else if(dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
   alert('Roberto, Comprate el helado de heladix');
}
else if(dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
   alert('Roberto, Comprate el helado de fresa');
}
else if(dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
   alert('Roberto, Comprate el helado de Guama');
}

else if(dineroRoberto >= 2.9) {
   alert('Roberto, Comprate helado de confeti o pote');

}else {
   alert('Roberto, No te alcanza para nada');
}

// -------------- Pedro ------------------
if(dineroPedro >= 0.6 && dineroPedro < 1) {
   alert('Pedro, Comprate el helado de agua');
}
else if(dineroPedro >= 1 && dineroPedro < 1.6) {
   alert('Pedro, Comprate el helado de crema');
}
else if(dineroPedro >= 1.6 && dineroPedro < 1.7) {
   alert('Pedro, Comprate el helado de heladix');
}
else if(dineroPedro >= 1.7 && dineroPedro < 1.8) {
   alert('Pedro, Comprate el helado de fresa');
}
else if(dineroPedro >= 1.8 && dineroPedro < 2.9) {
   alert('Pedro, Comprate el helado de Guama');
}

else if(dineroPedro >= 2.9) {
   alert('Pedro, Comprate helado de confeti o pote');

}else {
   alert('Pedro, No te alcanza para nada');
}


