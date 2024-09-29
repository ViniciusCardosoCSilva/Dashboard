function get(url) {
    
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro na requisição: ' + response.status);
            }
            return response.json();
        })
        .catch(error => {
            console.error('Erro ao buscar dados:', error);
        });
}

async function main() {
    
    const url = 'http://127.0.0.1:8080/treinamentos'; // Adicionei http:// no início do URL
    await get(url);
 
}

main();

document.getElementById('form_login').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const data = {
        email: email,
        password: password,
      };
      fetch('http://127.0.0.1:8080/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => {
        
        const msg = document.getElementById('mensagem');
            if (!response.ok) {
                if(response.status === 403){
                    msg.style.display = 'block'; 
                }else{
                    throw new Error('Erro na requisição: ' + response.statusText);
                }
        }else{
          console.log(data);
        }
        
        
        return response.json();
      })
      .then(data => {
        sessionStorage.setItem('id', data.id);
        sessionStorage.setItem('email', email);
        sessionStorage.setItem('role', data.role);
        sessionStorage.setItem('token', data.token);
        if(data.role == 'TREINADOR'){
          window.location.href = './dashboardTreinador.html';
        }
        if(data.role == 'FUNCIONARIO'){
          window.location.href = './dashboard.html';
        }
        if(data.role == 'ADMIN'){
          window.location.href = './dashboardAdmin.html';
        }
      })
      .catch(error => {
        console.error('Erro:', error);
      });
  });
