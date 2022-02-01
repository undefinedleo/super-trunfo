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
    "https://toppng.com/uploads/preview/transparent-ron-weasley-ron-weasley-11563043110lotjv3syex.png",
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
    "https://pm1.narvii.com/6810/760e6a82bf3e6718ae9bf5014cb55333a2c89d2cv2_hq.jpg6",
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
    "https://www.pikpng.com/pngl/m/480-4802404_luna-lovegood-png-luna-lovegood-clipart.png",
  atributos: {
    magia: 30,
    defesa: 30,
    inteligência: 50
  }
};
var card10 = {
  nome: "Severo Snape",
  imagem:
    "https://e1.pngegg.com/pngimages/33/775/png-clipart-6k-watchers-part-two-harry-potter-professor-severus-snape.png",
  atributos: {
    magia: 40,
    defesa: 40,
    inteligência: 55
  }
};
 var card11 = {
   nome: "Fred Weasley",
   imagem:
     "https://e1.pngegg.com/pngimages/987/987/png-clipart-6k-watchers-part-two-harry-potter-fred-and-george-weasley.png",
  atributos: {
    magia: 30,
     defesa: 30,
     inteligência: 55
   }
 };
 var card12 = {
   nome: "Jorge Weasley",
   imagem:
     "https://e1.pngegg.com/pngimages/987/987/png-clipart-6k-watchers-part-two-harry-potter-fred-and-george-weasley.png",
   atributos: {
     magia: 35,/     defesa: 30,
     inteligência: 55
   }
 };
var card13 = {
  nome: "Dobby",
  imagem:
    "https://toppng.com/uploads/preview/report-abuse-dobby-harry-potter-11563349282j5ed55jvjj.png",
  atributos: {
    magia: 40,
    defesa: 35,
    inteligência: 30
  }
};

var cards = [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10, card11, card12, card13];
var cartaMaquina;
var cartaPlayer;

function sortearCarta() {
  var numeroCartasMaquina = parseInt(Math.random() * 3);
  cartaMaquina = cards[numeroCartasMaquina];
  var numeroPlayer = parseInt(Math.random() * 3);
  while (numeroPlayer == numeroCartasMaquina) {
    numeroPlayer = parseInt(Math.random() * 3);
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
