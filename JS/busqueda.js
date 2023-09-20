var lista = [
  "Aerobic",
  "Ajedrez",
  "Atletismo",
  "Balonmano",
  "Béisbol",
  "Badminton",
  "Baloncesto",
  "Boxeo",
  "Ciclismo",
  "Equitación",
  "Esgrima",
  "Footing",
  "Fútbol",
  "Gimnasia artística",
  "Gimnasia rítmica",
  "Judo",
  "Lanzamiento de disco",
  "Lanzamiento de jabalina",
  "Levantamiento de pesas",
  "Lucha",
  "Natación",
  "Natación sincronizada",
  "Patinaje",
  "Pentatlón",
  "Remo",
  "Salto alto",
  "Salto largo",
  "Tenis",
  "Tenis de mesa",
  "Tiro con arco",
  "Voleibol",
  "Waterpolo",
];

function iniciar() {
  var listaElement = document.getElementById("lstsports");

  cargarLista();

  if (listaElement.addEventListener) {
    listaElement.addEventListener(
      "dblclick",
      function () {
        cargarTexto(this.options[this.selectedIndex].text);
      },
      false
    );
  } else if (listaElement.attachEvent) {
    listaElement.attachEvent("ondblclick", function () {
      cargarTexto(this.options[this.selectedIndex].text);
    });
  }

  var texto = document.getElementById("txtsport");

  if (texto.addEventListener) {
    texto.addEventListener("keyup", buscar, false);
  } else if (texto.attachEvent) {
    texto.attachEvent("onkeyup", buscar);
  }
}

function cargarLista() {
  for (var x = 0; x < lista.length; x++) {
    document.frmsearchsport.lstsports[x] = new Option(lista[x]);
  }
}

function cargarTexto(elemento) {
  if (elemento != null && elemento != undefined && elemento != "") {
    document.frmsearchsport.txtsport.value = elemento;
  }
}

function buscar() {
  limpiarLista();

  var str = document.frmsearchsport.txtsport.value;
  var expr = new RegExp("^" + str, "i");
  var y = 0;
  for (var x = 0; x < lista.length; x++) {
    if (expr.test(lista[x])) {
      document.frmsearchsport.lstsports[y] = new Option(lista[x], lista[x]);
      y++;
    }
  }
}

function limpiarLista() {
  for (var x = document.frmsearchsport.lstsports.length; x >= 0; x--) {
    document.frmsearchsport.lstsports[x] = null;
  }
}

if (window.addEventListener) {
  window.addEventListener("load", iniciar, false);
} else if (window.attachEvent) {
  window.attachEvent("onload", iniciar);
}
