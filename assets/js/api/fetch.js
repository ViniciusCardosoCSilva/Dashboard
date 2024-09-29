// URL da sua API
const url = '127.0.0.1:8080/funcionarios';

// Função para consumir a API
async function getFuncionarios() {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Verifica se a requisição foi bem-sucedida
    if (!response.ok) {
      throw new Error('Erro na requisição: ' + response.status);
    }

    // Converte a resposta em JSON
    const data = await response.json();
    
    // Manipula os dados como preferir
    console.log(data);
  } catch (error) {
    console.error('Erro ao buscar funcionários:', error);
  }
}

// // Chama a função para obter os funcionários
// getFuncionarios();

// // Função para renderizar os funcionários em uma tabela HTML
// function renderFuncionarios(funcionarios) {
//     const tabela = document.getElementById('funcionariosTableBody');
    
//     // Limpa a tabela antes de adicionar novos dados
//     tabela.innerHTML = '';
  
//     // Itera sobre a lista de funcionários e insere cada um na tabela
//     funcionarios.forEach(funcionario => {
//       const row = `
//         <tr>
//           <td>${funcionario.id}</td>
//           <td>${funcionario.nome}</td>
//           <td>${funcionario.cpf}</td>
//           <td>${funcionario.email}</td>
//           <td>${funcionario.departamento ? funcionario.departamento.nome : 'Sem departamento'}</td>
//           <td>${funcionario.treinamentos.map(t => t.nome).join(', ')}</td>
//         </tr>
//       `;
//       tabela.innerHTML += row;
//     });
//   }
  
//   // Chama a função para buscar e exibir os funcionários ao carregar a página
//   document.addEventListener('DOMContentLoaded', getFuncionarios);
