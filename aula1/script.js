  const valorreal = document.querySelector("input");     //criei uma variável para armazenar o valor digitado pelo usuário, usando o querySelector para selecionar o elemento input do HTML
  
  function converter(){    //chamei a função converter() para ser executada quando o botão for clicado
    const valorconvertido = valorreal.value / 5;  //criei uma variável para armazenar o valor convertido, dividindo o valor digitado pelo usuário por 5 (considerando a cotação do dólar como 5 reais)
    alert(`o valor em dolar e ${valorconvertido}`); //usei o alert para mostrar o resultado da conversão para o usuário, usando template literals para inserir o valor convertido na mensagem
  }
