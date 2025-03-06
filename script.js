// Chamada à função serverless hospedada na Netlify
fetch('/.netlify/functions/minha-api')
  .then(response => response.json())
  .then(data => {
    document.getElementById('api-response').innerText = data.message;
  })
  .catch(error => {
    document.getElementById('api-response').innerText = 'Erro ao carregar a resposta da API';
    console.error('Erro na chamada da API:', error);
  });
