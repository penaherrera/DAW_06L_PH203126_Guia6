function iniciar() {
  var boton = document.getElementById("validar");
  if (boton.addEventListener) {
    boton.addEventListener("click", validar, false);
  } else if (boton.attachEvent) {
    boton.attachEvent("onclick", validar);
  }
}

function validar() {
  var tipo =
    document.frmdatos.seltipo.options[frmdatos.seltipo.selectedIndex].value;
  var dato = document.frmdatos.txtdato.value;
  var valido = false;
  var re = null;

  if (dato == null || dato == "" || dato.length == 0) {
    alert("No se ha ingresado ningún valor en el campo de formulario");
    return 0;
  }

  switch (tipo) {
    case "dui":
      // El formato de DUI en El Salvador es ########-#
      re = /^\d{8}-\d{1}$/;
      if (re.test(dato)) {
        valido = true;
      }
      break;

    case "nit":
      // El formato del NIT en El Salvador es ####-######-###-#
      re = /^[0-9]{4}-[0-9]{6}-[0-9]{3}-[0-9]{1}$/;
      if (re.test(dato)) {
        valido = true;
      }
      break;

    case "tarjeta":
      // Solo aplica para tarjetas de crédito Visa y MasterCard
      // en las que el formato es ####-####-####-####
      re = /^(\d{4}-){3}(\d{4}){1}$/;
      if (re.test(dato)) {
        valido = true;
      }
      break;

    case "carnet":
      // El formato en los carnets de la UDB es LL######
      re = /^[A-Z]{2}[0-9]{6}$/;
      if (re.test(dato)) {
        valido = true;
      }
      break;

    case "telefono":
      // El formato de número telefónico en El Salvador es ####-####
      re = /^\d{4}-\d{4}$/;
      if (re.test(dato)) {
        valido = true;
      }
      break;

    default:
      alert("El tipo de dato seleccionado no puede ser procesado");
      break;
  }

  if (valido == true) {
    alert("El valor " + dato + " de " + tipo + " ingresado es válido");
  } else if (valido == false) {
    alert("El valor " + dato + " de " + tipo + " ingresado es inválido");
  }
}

if (window.addEventListener) {
  window.addEventListener("load", iniciar, false);
} else if (window.attachEvent) {
  window.attachEvent("onload", iniciar);
}
