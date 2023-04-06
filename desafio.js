/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
   
      const usuario = [(comprarCarta()), (comprarCarta())]
      const computador = [(comprarCarta()), (comprarCarta())]
      
      // const usuario = []
      // const computador = []
  
      alert("Boas vindas ao jogo de BlackJack!")
      if (confirm("Quer iniciar uma nova rodada?")){
    const resultadoComputador = computador[0].valor + computador[1].valor
    const resultadoUsuario = usuario[0].valor + usuario[1].valor
    const textoUsuario = usuario[0].texto + " " + usuario[1].texto
    const textoComputador = computador[0].texto + " " + computador[1].texto
    console.log(textoUsuario)
    console.log(textoComputador)
    console.log(`As cartas do usuário: ${textoUsuario}. A soma do usuário foi: ${resultadoUsuario}`)
    console.log(`As cartas do computador: ${textoComputador}. A soma do computador foi: ${resultadoComputador}`)
    
    let novaCarta = confirm(`A soma das suas cartas é ${resultadoUsuario},Gostaria de mais uma carta?`);{
   
    while (novaCarta <=21){
         
        
      }
         if(resultadoUsuario <=21 && resultadoUsuario > resultadoComputador){
          console.log("O usuário ganhou!")
        }else if(resultadoComputador <= 21 && resultadoComputador > resultadoUsuario){
        console.log("O computador ganhou!")
        }else if(resultadoComputador === resultadoUsuario){
        console.log("Empate!")
        }
    }else {
        alert("O jogo acabou!")
     }









// const valorMaximo = 21

// // Definição das variáveis
// let cartasJogador = [];
// let cartasComputador = [];
// let naipesJogador = []
// let naipesComputador = []
// let pontuacaoJogador = 0;
// let pontuacaoComputador = 0;

// // Função para sortear uma carta aleatória
// function sortearCarta(cartas) {
//   const indiceCarta = Math.floor(Math.random() * cartas.length);
//   return cartas.splice(indiceCarta, 1)[0];
// }

// // Função para atualizar a pontuação do jogador
// function atualizarPontuacao(cartasJogador) {
//   let pontuacao = 0;
//   for (let i = 0; i < cartasJogador.length; i++) {
//     pontuacao += valorCarta[cartasJogador[i].charAt(0)];
//   }
//   return pontuacao;
// }



// // Sortear as duas primeiras cartas do jogador
// cartasJogador.push(sortearCarta(cartas));
// cartasJogador.push(sortearCarta(cartas));

// // Atualizar a pontuação do jogador
// pontuacaoJogador = atualizarPontuacao(cartasJogador);

// // Sortear as duas primeiras cartas do computador
// cartasComputador.push(sortearCarta(cartas));
// cartasComputador.push(sortearCarta(cartas));

// // Atualizar a pontuação do comput
// }else {
//    alert("O jogo acabou!")
// }
//       }