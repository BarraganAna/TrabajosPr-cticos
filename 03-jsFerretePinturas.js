/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{ let vCenti;
  let vFahre;
 vFahre = parseFloat(document.getElementById("txtIdTemperatura").value);
 vCenti= (vFahre-32)* 0.556;
 alert(vFahre + "°F son " + vCenti.toFixed(2) + "°C ");	
}

function CentigradosFahrenheit () 
{ let vCenti
  let vFahre
  vCenti= parseFloat(document.getElementById("txtIdTemperatura").value);
  vFahre= (vCenti * 1.8) + 32;
  alert(vCenti + "°C  son "+ vFahre.toFixed(2) +"°F"); 
	
}
