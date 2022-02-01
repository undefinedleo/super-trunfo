//ainda não está finalizado. att.23/09
var card1 = {
  nome: "Harry Potter",
  imagem:
    "https://imagensemoldes.com.br/wp-content/uploads/2020/06/Preparado-Harry-Potter-PNG.png",
  atributos: {
    magia: 50,
    defesa: 30,
    inteligência: 40
  }
};
var card2 = {
  nome: "Voldemort (Valdemiro)",
  imagem: "https://upload.wikimedia.org/wikipedia/en/a/a3/Lordvoldemort.jpg",
  atributos: {
    magia: 50,
    defesa: 40,
    inteligência: 50
  }
};
var card3 = {
  nome: "Hermione Granger",
  imagem:
    "https://i.pinimg.com/736x/c2/bb/7e/c2bb7e9ee814ddb7c6e5b0429eaf688c--hermione-granger-hair-emma-watson-hair.jpg",
  atributos: {
    magia: 30,
    defesa: 30,
    inteligência: 55
  }
};
var card4 = {
  nome: "Ronald Weasley",
  imagem:
    "http://pm1.narvii.com/6961/c2ea0f3ed20d52612d3a15b698c378bbd8116213r1-500-545v2_00.jpg",
  atributos: {
    magia: 25,
    defesa: 30,
    inteligência: 35
  }
};
var card5 = {
  nome: "Draco Malfoy",
  imagem: "https://wallpapercave.com/wp/wp1866841.jpg",
  atributos: {
    magia: 20,
    defesa: 25,
    inteligência: 25
  }
};
var card6 = {
  nome: "Hagrid",
  imagem:
    "http://4.bp.blogspot.com/-jiYOwBvamRc/TbH8oNhAuNI/AAAAAAAAANg/DFKszTBHmT0/s1600/Hagrid.png",
  atributos: {
    magia: 30,
    defesa: 40,
    inteligência: 35
  }
};
var card7 = {
  nome: "Alvo Dumbledore",
  imagem:
    "https://pbs.twimg.com/profile_images/1233008382098968577/gKqHl74C_400x400.jpg",
  atributos: {
    magia: 50,
    defesa: 40,
    inteligência: 40
  }
};
var card8 = {
  nome: "Sirius Black",
  imagem:
    "https://w7.pngwing.com/pngs/568/620/png-transparent-gary-oldman-sirius-black-the-dark-knight-harry-potter-commissioner-gordon-harry-potter-thumbnail.png",
  atributos: {
    magia: 50,
    defesa: 45,
    inteligência: 50
  }
};
var card9 = {
  nome: "Luna Lovegood",
  imagem:
    "https://www.estrelando.com.br/uploads/2016/08/15/luna-lovegood-6-1471265903.jpg",
  atributos: {
    magia: 30,
    defesa: 30,
    inteligência: 50
  }
};
var card10 = {
  nome: "Severo Snape",
  imagem:
    "https://www.superprof.com.br/imagens/anuncios/professor-home-professor-severus-snape-aula-desenho-anatomico-arte-das-formas-internas.jpg",
  atributos: {
    magia: 40,
    defesa: 40,
    inteligência: 55
  }
};
var card11 = {
  nome: "Fred Weasley",
  imagem:
    "https://uploads.spiritfanfiction.com/historias/capas/202012/entre-risos-piadas-e-brincadeirasfred-weasley-21223887-111220202022.jpg",
  atributos: {
    magia: 30,
    defesa: 30,
    inteligência: 55
  }
};
var card12 = {
  nome: "Jorge Weasley",
  imagem:
    "https://pm1.narvii.com/6308/952a6772b722e09f06cb4b36499a8ccec7210f68_hq.jpg",
  atributos: {
    magia: 35,
    defesa: 30,
    inteligência: 55
  }
};
var card13 = {
  nome: "Dobby",
  imagem:
    "https://todateen.com.br/wp-content/uploads/2019/06/dobby.jpg",
  atributos: {
    magia: 40,
    defesa: 35,
    inteligência: 30
  }
};

var cards = [
  card1,
  card2,
  card3,
  card4,
  card5,
  card6,
  card7,
  card8,
  card9,
  card10,
  card11,
  card12,
  card13
];
var cartaMaquina;
var cartaPlayer;

function sortearCarta() {
  var numeroCartasMaquina = parseInt(Math.random() * 13);
  cartaMaquina = cards[numeroCartasMaquina];
  var numeroPlayer = parseInt(Math.random() * 13);
  while (numeroPlayer == numeroCartasMaquina) {
    numeroPlayer = parseInt(Math.random() * 13);
  }
  cartaPlayer = cards[numeroPlayer];
  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  document.getElementById("refresh").disabled = false;

  exibirCartaJogador();
}

function obtemAtributo() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributo();
  var divResultado = document.getElementById("resultado");

  if (
    cartaPlayer.atributos[atributoSelecionado] >
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Você venceu!</p>";
  } else if (
    cartaPlayer.atributos[atributoSelecionado] <
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class= 'resultado-final'>Você perdeu.</p>";
  } else {
    htmlResultado = "<p class= 'resultado-final'>Vocês empataram.</p>";
  }
  divResultado.innerHTML = htmlResultado;

  document.getElementById("btnJogar").disabled = true;
  exibirCartaMaquina();
}

function exibirCartaJogador() {
  var divJogador = document.getElementById("carta-jogador");
  divJogador.style.backgroundImage = `url(${cartaPlayer.imagem})`;
  //divJogador.style.backgroundImage = "url(" + cartaPlayer.imagem + ")"
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";

  for (var atributo in cartaPlayer.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaPlayer.atributos[atributo] +
      "<br>";
  }
  var nome = `<p class="carta-subtitle">${cartaPlayer.nome}</p>`;

  divJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  var divMaquina = document.getElementById("carta-maquina");
  divMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  // divJogador.style.backgroundImage = "url(" + cartaPlayer.imagem + ")";
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";

  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

  divMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function refresh() {
  var btn = document.querySelector("#refresh");
  btn.addEventListener("click", function () {
    // location.reload(true);
    location.href = location.href;
  });
}
