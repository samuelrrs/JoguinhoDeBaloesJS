var total = 0;
function criarBalao() {
  var balao = document.createElement("div");
  balao.setAttribute("class", "balao");

  var x = Math.floor(Math.random() * 500);
  var y = Math.floor(Math.random() * 300);

  balao.setAttribute("style", "left:" + x + "px;top:" + y + "px;");
  balao.setAttribute("onclick", "estourar(this)");

  document.body.appendChild(balao);
}

function estourar(objt) {
  document.body.removeChild(objt);
  total++;

  console.log("clicou");
  var score = document.getElementById("score");
  score.innerHTML = "Pontuação atual : " + total;

  if (total >= 20) {
    alert("Parabéns ! Você zerou o game !");
    window.location.reload();
  }
}

function carregarJogo() {
  setInterval(criarBalao, 400);
}

function resetaGame() {
  alert('Tempo esgotado')
  window.location.reload();
}


setTimeout(resetaGame, 10000)