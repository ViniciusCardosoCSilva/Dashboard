
function loadCadastroTreinamento(){
    const id = sessionStorage.getItem('id');
    console.log(id);
    fetch('http://127.0.0.1:8080/departamentos', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionStorage.getItem('token')}`
        },
        body: JSON.stringify()
      })
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log('Departamentos: ', data);
        const select = document.getElementById('departamentos');

        // Limpa qualquer opção existente antes de adicionar as novas
        select.innerHTML = '';
  
        // Adiciona a primeira opção
        const defaultOption = document.createElement('option');
        defaultOption.text = 'Escolha um ou mais departamentos';
        defaultOption.disabled = true; // Tornar a opção não selecionável
        select.appendChild(defaultOption);
  
        // Itera sobre os dados recebidos da API para criar uma tag <option> para cada departamento
        data.forEach(departamento => {
          const option = document.createElement('option');
          option.value = departamento.id; // Assumindo que o objeto departamento tem um campo "id"
          option.text = departamento.nome; // Assumindo que o objeto departamento tem um campo "nome"
          select.appendChild(option);
        });
      })
      .catch(error => {
        console.error('Erro:', error); // Exibe o erro no console
      });

}

loadCadastroTreinamento()


document.getElementById('form_treinamento').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o comportamento padrão do formulário de recarregar a página

    // Captura os valores dos campos
    const titulo = document.getElementById('titulo').value;
    const tipo = document.getElementById('tipo').value;
    const departamentosSelect = document.getElementById('departamentos');
    const departamentos = Array.from(departamentosSelect.selectedOptions).map(option => option.value);
    const descricao = document.getElementById('descricao').value;
    const corpo_texto = document.getElementById('conteudo').value;
    const token = sessionStorage.getItem('token');
    const email = sessionStorage.getItem('email');
    const id = sessionStorage.getItem('id');
    const tags = [];
    const status = 'RASCUNHO';

    // Exibe os valores no console (você pode manipular os dados conforme necessário)
    const data = {
        titulo: titulo,
        tipo: tipo,
        departamentos_id: departamentos,
        descricao: descricao,
        corpo_texto: corpo_texto,
        treinador_id: id,
        status: status
      };

      console.log('dados',data);

      fetch('http://127.0.0.1:8080/treinamentos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
      })
      .then(response => {
        if(response.status == 201){
          alert("Treinamento cadastrado com sucesso!")
          console.log(response);
          window.location.href = './treinamento.html';  
        }
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('Erro:', error); // Exibe o erro no console
      });

  });
