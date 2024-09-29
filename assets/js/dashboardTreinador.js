function get(url) {
    
    return fetch(url) // Usando fetch para fazer a requisição
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro na requisição: ' + response.status);
            }
            return response.json(); // Converte a resposta em JSON
        })
        .catch(error => {
            console.error('Erro ao buscar dados:', error);
        });
}

function loadPage(){
    const email = sessionStorage.getItem('email');
    const token = sessionStorage.getItem('token');
    const id = sessionStorage.getItem('id');

    console.log(email)

    fetch(`http://127.0.0.1:8080/treinador/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
          'X-Email': email
        },
        body: JSON.stringify()
      })
      .then(response => {
            if (!response.ok) {
                if(response.status === 403){
                    
                }else{
                    throw new Error('Erro na requisição: ' + response.statusText);
                }
        }
        
        return response.json();
      })
      .then(data => {
        console.log('Sucesso:', data); 
      })
      .catch(error => {
        console.error('Erro:', error); // Exibe o erro no console
      });

      
}

main();
function main(){
    loadPage();
}
