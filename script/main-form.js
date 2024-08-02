function clicar(valor) {
  // Definir todos os links e divs como não destacados e escondidos
  const links = ['pacotes', 'voomedida'];
  const divs = ['target-div1', 'target-div2'];
  
  links.forEach(id => {
      document.getElementById(id).classList.remove('backgroudhover');
  });
  
  divs.forEach(id => {
      document.getElementById(id).classList.add('naovisivel');
  });

  // Destacar o link clicado e mostrar a div correspondente
  if (links.includes(valor)) {
      const link = document.getElementById(valor);
      const index = links.indexOf(valor);
      link.classList.add('backgroudhover');
      document.getElementById(divs[index]).classList.remove('naovisivel');
  }
}

// Exemplo de como você poderia chamar a função clicar
document.getElementById('pacotes').addEventListener('click', () => clicar('pacotes'));
document.getElementById('voomedida').addEventListener('click', () => clicar('voomedida'));
