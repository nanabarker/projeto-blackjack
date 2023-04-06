/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
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



