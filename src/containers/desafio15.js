//Crea una función que calcule y retorne cuántos días hay entre dos cadenas de texto que 
//representen fechas. - Una cadena de texto que representa una fecha tiene el formato 'dd/MM/yyyy'. 
//- La función recibirá dos String y retornará un Int. 
//- La diferencia en días será absoluta (no importa el orden de las fechas). 
//- Si una de las dos cadenas de texto no representa una fecha correcta se lanzará una excepción.

restaFechas = function(f1,f2)
 {
 var aFecha1 = f1.split('/');
 var aFecha2 = f2.split('/');
 var fFecha1 = Date.UTC(aFecha1[2],aFecha1[1]-1,aFecha1[0]);
 var fFecha2 = Date.UTC(aFecha2[2],aFecha2[1]-1,aFecha2[0]);
 var dif = fFecha2 - fFecha1;
 var dias = Math.floor(dif / (1000 * 60 * 60 * 24));
 return dias;
 }

var f1 = '10/09/2014';
var f2='15/10/2014';
console.log(restaFechas(f1,f2));