const tbodyTreinamentos = document.querySelector('tbody');

if(sessionStorage.getItem('role') != 'ADMIN'){
    loadTreinamentos()
}

function loadTreinamentos(){
    fetch("http://localhost:8080/treinamentos", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sessionStorage.getItem('token')}`
        }
    }).then(res => { return res.json() })
        .then(data => {
            console.log(data)
            data.forEach(treinamento => {

                const row = document.createElement('tr');

                const nomes = document.createElement('td');
                const divExternaNomes = document.createElement('div');
                divExternaNomes.classList.add('d-flex', 'px-2', 'py-1');

                const divInternaNomes = document.createElement('div');
                divInternaNomes.classList.add('d-flex', 'flex-column', 'justify-content-center');

                const tituloTreinamento = document.createElement('h6');
                tituloTreinamento.classList.add('mb-0', 'text-sm');
                tituloTreinamento.innerText = treinamento.titulo;

                const nomeTreinador = document.createElement('p');
                nomeTreinador.classList.add('text-xs', 'text-secondary', 'mb-0');
                nomeTreinador.innerText = treinamento.treinador.nome;

                divInternaNomes.append(tituloTreinamento);
                divInternaNomes.append(nomeTreinador);
                divExternaNomes.append(divInternaNomes);
                nomes.append(divExternaNomes);
                row.append(nomes);

                const departamento = document.createElement('td');

                treinamento.departamentos.forEach(dept => {
                    const depart = document.createElement('p');
                    depart.classList.add('text-xs', 'text-secondary', 'mb-0')
                    depart.innerText = dept.nome
                    departamento.append(depart);
                });

                row.append(departamento);

                const tipo = document.createElement('td');
                tipo.classList.add('align-middle', 'text-center', 'text-sm');

                const tipoTreinamento = document.createElement('span');
                tipoTreinamento.classList.add('badge', 'badge-sm');
                if (treinamento.tipo == 'OBRIGATORIO') {
                    tipoTreinamento.innerText = 'OBRIGATÓRIO';
                    tipoTreinamento.classList.add('bg-gradient-danger');
                } else {
                    tipoTreinamento.innerText = treinamento.tipo;
                    tipoTreinamento.classList.add('bg-gradient-success');
                }

                tipo.append(tipoTreinamento);
                row.append(tipo);

                const dataCriacao = document.createElement('td');
                dataCriacao.classList.add('align-middle', 'text-center');
                const dataTreinamento = document.createElement('span');
                dataTreinamento.innerText = treinamento.data_criacao.slice(0, 9);
                dataTreinamento.classList.add('text-secondary', 'text-xs', 'font-weight-bold');

                dataCriacao.append(dataTreinamento);
                row.append(dataCriacao);

                const acessar = document.createElement('td')
                acessar.classList.add('align-middle');
                acessar.innerHTML = `
                            <a href="paginaTreinamento.html" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip"
                            data-original-title="Edit user">
                                Acessar
                            </a>`

                row.append(acessar);

                tbodyTreinamentos.append(row);

            });
        })
    }

    function loadTreinamentosId(idFuncionario){
        fetch("http://localhost:8080/treinamentos/", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(res => { return res.json() })
            .then(data => {
                console.log(data)
                data.forEach(treinamento => {
    
                    const row = document.createElement('tr');
    
                    const nomes = document.createElement('td');
                    const divExternaNomes = document.createElement('div');
                    divExternaNomes.classList.add('d-flex', 'px-2', 'py-1');
    
                    const divInternaNomes = document.createElement('div');
                    divInternaNomes.classList.add('d-flex', 'flex-column', 'justify-content-center');
    
                    const tituloTreinamento = document.createElement('h6');
                    tituloTreinamento.classList.add('mb-0', 'text-sm');
                    tituloTreinamento.innerText = treinamento.titulo;
    
                    const nomeTreinador = document.createElement('p');
                    nomeTreinador.classList.add('text-xs', 'text-secondary', 'mb-0');
                    nomeTreinador.innerText = treinamento.treinador.nome;
    
                    divInternaNomes.append(tituloTreinamento);
                    divInternaNomes.append(nomeTreinador);
                    divExternaNomes.append(divInternaNomes);
                    nomes.append(divExternaNomes);
                    row.append(nomes);
    
                    const departamento = document.createElement('td');
    
                    treinamento.departamentos.forEach(dept => {
                        const depart = document.createElement('p');
                        depart.classList.add('text-xs', 'text-secondary', 'mb-0')
                        depart.innerText = dept.nome
                        departamento.append(depart);
                    });
    
                    row.append(departamento);
    
                    const tipo = document.createElement('td');
                    tipo.classList.add('align-middle', 'text-center', 'text-sm');
    
                    const tipoTreinamento = document.createElement('span');
                    tipoTreinamento.classList.add('badge', 'badge-sm');
                    if (treinamento.tipo == 'OBRIGATORIO') {
                        tipoTreinamento.innerText = 'OBRIGATÓRIO';
                        tipoTreinamento.classList.add('bg-gradient-danger');
                    } else {
                        tipoTreinamento.innerText = treinamento.tipo;
                        tipoTreinamento.classList.add('bg-gradient-success');
                    }
    
                    tipo.append(tipoTreinamento);
                    row.append(tipo);
    
                    const dataCriacao = document.createElement('td');
                    dataCriacao.classList.add('align-middle', 'text-center');
                    const dataTreinamento = document.createElement('span');
                    dataTreinamento.innerText = treinamento.data_criacao.slice(0, 9);
                    dataTreinamento.classList.add('text-secondary', 'text-xs', 'font-weight-bold');
    
                    dataCriacao.append(dataTreinamento);
                    row.append(dataCriacao);
    
                    const acessar = document.createElement('td')
                    acessar.classList.add('align-middle');
                    acessar.innerHTML = `
                                <a href="paginaTreinamento.html" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip"
                                data-original-title="Edit user">
                                    Acessar
                                </a>`
    
                    row.append(acessar);
    
                    tbodyTreinamentos.append(row);
    
                });
            })
        }