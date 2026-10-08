// Lista de candidatos
let candidatos = ["Ana", "Bruno", "Eduardo", "Isabela", "Carlos", "Otávio"];

// Função para verificar o dia da entrevista
function verificarDiaEntrevista(nome) {
  // Pega a primeira letra e transforma em maiúscula
  let primeiraLetra = nome.charAt(0).toUpperCase();

  // Verifica se é vogal
  if (primeiraLetra === "A" || primeiraLetra === "E" || 
      primeiraLetra === "I" || primeiraLetra === "O" || 
      primeiraLetra === "U") {
    console.log(`${nome} → Entrevista na segunda-feira`);
  } else {
    console.log(`${nome} → Entrevista na terça-feira`);
  }
}

// Testando com todos os candidatos
candidatos.forEach(candidato => verificarDiaEntrevista(candidato));
