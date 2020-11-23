const numero = geraNumero();
let grau = "facil";

const partida = { 
					usuario: "",
					palpites: []
				}
				


function tocarMusica(){
				console.log("teste tocar musica");
				var sample = document.getElementById("foobar");
				sample.play();
		}



function jogar(){
		
		//tocarMusica();
		
		partida.usuario = document.getElementById("fname").value;

		let resultado = "";
		let jogo = "";
		
		let palpite = document.getElementById("palpite").value;
		
		partida.palpites.push(palpite);
		
		console.log("Seu palpite foi: " + palpite);
		
		console.log("numero sorteado: " + numero);
		
		if(palpite == numero) {
			resultado = "<div id='acertou'>acertou</div>";
			console.log("acertou");
		} else if (palpite > numero) {
			resultado = "errou";
			console.log(" foi alto");
		} else if(palpite < numero) {
			resultado = "errou";
			console.log("foi baixo")
		}	
		
		//limpa campo Palpite
		document.getElementById("palpite").value = "";
		
		jogo = "Jogador: " + partida.usuario + "<br />";
		jogo += "Palpites: " + partida.palpites.join(" - ");
		
		document.getElementById("jogo").innerHTML = jogo;
		
		document.getElementById("resultado").innerHTML = resultado;
		
		console.log(partida);
		
}

function geraNumero(){
	return Math.round(Math.random()*10);
}

function reiniciar(){
	location.reload();
}

function alteraGrau(novoGrau){
	grau = novoGrau;
}
