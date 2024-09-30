const tbodyTreinadores = document.querySelector('#tb-treinadores');
const tbodyFuncionarios = document.querySelector('#tb-funcionarios');
const formTreinador = document.querySelector('#form-cadastro-treinador');
const formFuncionario = document.querySelector('#form-cadastro-funcionario');
const btnCadastroTreinadores = document.querySelector('#btn-cadastro-treinadores');
const btnCadastroUsuarios = document.querySelector('#btn-cadastro-funcionarios');
const btnCadastroUsuariosForms = document.querySelector('#btn-cadastro-funcionarios-form');
const btnCadastroTreinadorForms = document.querySelector('#btn-cadastro-treinadores-form');

const selectDepartamentoFuncionario = document.querySelector('#select-departamento-funcionario');

const nomeTreinador = document.getElementById('input-nome-treinador');
const roleTreinador = document.getElementById('select-role-treinador');
const cpfTreinador = document.getElementById('input-cpf-treinador');
const emailTreinador = document.getElementById('input-email-treinador');
const senhaTreinador = document.getElementById('input-senha-treinador');

const nomeFuncionario = document.getElementById('input-nome-funcionario');
const departamentoFuncionario = document.getElementById('select-departamento-funcionario');
const cpfFuncionario = document.getElementById('input-cpf-funcionario');
const emailFuncionario = document.getElementById('input-email-funcionario');
const senhaFuncionario = document.getElementById('input-senha-funcionario');

const nomeErroTreinador = document.getElementById('nome-obrigatorio-treinador');
const roleErroTreinador = document.getElementById('role-obrigatorio-treinador');
const cpfErroTreinador = document.getElementById('cpf-obrigatorio-treinador');
const emailErroTreinador = document.getElementById('email-obrigatorio-treinador');
const senhaErroTreinador = document.getElementById('senha-obrigatorio-treinador');

const nomeErroFuncionario = document.getElementById('nome-obrigatorio-funcionario');
const departamentoErroFuncionario = document.getElementById('departamento-obrigatorio-funcionario');
const cpfErroFuncionario = document.getElementById('cpf-obrigatorio-funcionario');
const emailErroFuncionario = document.getElementById('email-obrigatorio-funcionario');
const senhaErroFuncionario = document.getElementById('senha-obrigatorio-funcionario');

listAllTreinadores();
listAllFuncionarios();


btnCadastroTreinadores.addEventListener('click', ()=>{
    formTreinador.reset();
})

btnCadastroUsuarios.addEventListener('click', ()=>{
    formFuncionario.reset();
    listAllDepartamentos();
})

formTreinador.addEventListener('submit', (e) => {

    e.preventDefault();

    if (!nomeErroTreinador.classList.contains('hidden')) nomeErroTreinador.classList.toggle('hidden');
    if (!roleErroTreinador.classList.contains('hidden')) roleErroTreinador.classList.toggle('hidden');
    if (!cpfErroTreinador.classList.contains('hidden')) cpfErroTreinador.classList.toggle('hidden');
    if (!emailErroTreinador.classList.contains('hidden')) emailErroTreinador.classList.toggle('hidden');
    if (!senhaErroTreinador.classList.contains('hidden')) senhaErroTreinador.classList.toggle('hidden');


    if (nomeTreinador.value.trim() == "" || roleTreinador.value == null || cpfTreinador.value.trim() == "" || emailTreinador.value.trim() == "" || senhaTreinador.value.trim() == "") {

        if (nomeTreinador.value.trim() == "") {
            nomeErroTreinador.innerText = 'CAMPO OBRIGATÓRIO.';
            nomeErroTreinador.classList.toggle('hidden')
        }
        if (roleTreinador.value == null) {
            roleErroTreinador.innerText = 'CAMPO OBRIGATÓRIO.';
            roleErroTreinador.classList.toggle('hidden')
        }
        if (cpfTreinador.value.trim() == "") {
            cpfErroTreinador.innerText = 'CAMPO OBRIGATÓRIO.';
            cpfErroTreinador.classList.toggle('hidden')

        }
        if (emailTreinador.value.trim() == "") {
            emailErroTreinador.innerText = 'CAMPO OBRIGATÓRIO.';
            emailErroTreinador.classList.toggle('hidden')

        }
        if (senhaTreinador.value.trim() == "") {
            senhaErroTreinador.innerText = 'CAMPO OBRIGATÓRIO.';
            senhaErroTreinador.classList.toggle('hidden')

        }

    } else if (senhaTreinador.value.length < 6) {
        senhaErroTreinador.innerText = 'Senha deve conter no minimo 6 caractéres.';
        if (senhaErroTreinador.classList.contains('hidden')) senhaErroTreinador.classList.toggle('hidden')
    } else if (cpfTreinador.value.length != 11) {
        cpfErroTreinador.innerText = 'CPF deve ter 11 algarismos.';
        if (cpfErroTreinador.classList.contains('hidden')) cpfErroTreinador.classList.toggle('hidden')
    } else {

        var user = {
            nome: nomeTreinador.value,
            role: roleTreinador.value.toUpperCase(),
            cpf: cpfTreinador.value,
            email: emailTreinador.value,
            senha: senhaTreinador.value
        };

        insertTreinador(user);

    }
})

formFuncionario.addEventListener('submit', async (e) => {

    e.preventDefault();

    if (!nomeErroFuncionario.classList.contains('hidden')) nomeErroFuncionario.classList.toggle('hidden');
    if (!departamentoErroFuncionario.classList.contains('hidden')) departamentoErroFuncionario.classList.toggle('hidden');
    if (!cpfErroFuncionario.classList.contains('hidden')) cpfErroFuncionario.classList.toggle('hidden');
    if (!emailErroFuncionario.classList.contains('hidden')) emailErroFuncionario.classList.toggle('hidden');
    if (!senhaErroFuncionario.classList.contains('hidden')) senhaErroFuncionario.classList.toggle('hidden');


    if (nomeFuncionario.value.trim() == "" || departamentoFuncionario.value == null || cpfFuncionario.value.trim() == "" || emailFuncionario.value.trim() == "" || senhaFuncionario.value.trim() == "") {

        if (nomeFuncionario.value.trim() == "") {
            nomeErroFuncionario.innerText = 'CAMPO OBRIGATÓRIO.';
            nomeErroFuncionario.classList.toggle('hidden')
        }
        if (departamentoFuncionario.value == null) {
            departamentoErroFuncionario.innerText = 'CAMPO OBRIGATÓRIO.';
            departamentoErroFuncionario.classList.toggle('hidden')
        }
        if (cpfFuncionario.value.trim() == "") {
            cpfErroFuncionario.innerText = 'CAMPO OBRIGATÓRIO.';
            cpfErroFuncionario.classList.toggle('hidden')

        }
        if (emailFuncionario.value.trim() == "") {
            emailErroFuncionario.innerText = 'CAMPO OBRIGATÓRIO.';
            emailErroFuncionario.classList.toggle('hidden')

        }
        if (senhaFuncionario.value.trim() == "") {
            senhaErroFuncionario.innerText = 'CAMPO OBRIGATÓRIO.';
            senhaErroFuncionario.classList.toggle('hidden')

        }

    } else if (senhaFuncionario.value.length < 6) {
        senhaErroFuncionario.innerText = 'Senha deve conter no minimo 6 caractéres.';
        if (senhaErroFuncionario.classList.contains('hidden')) senhaErroFuncionario.classList.toggle('hidden')
    } else if (cpfFuncionario.value.length != 11) {
        cpfErroFuncionario.innerText = 'CPF deve ter 11 algarismos.';
        if (cpfErroFuncionario.classList.contains('hidden')) cpfErroFuncionario.classList.toggle('hidden')
    } else {

        const departamentos = await getAllDepartamentos();
        console.log("departamentos: ", departamentos);

        let departamento = {
            id: departamentoFuncionario.value,
            nome: departamentos[departamentoFuncionario.value -1].nome
        };

        var user = {
            nome: nomeFuncionario.value,
            departamento: departamento,
            cpf: cpfFuncionario.value,
            email: emailFuncionario.value,
            senha: senhaFuncionario.value
        };

        insertFuncionario(user);

    }
})

async function getAllTreinadores() {

    let request = await fetch("http://localhost:8080/treinadores", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sessionStorage.getItem('token')}`
        }
    })

    console.log(request)

    return await request.json();

}

async function listAllTreinadores() {

    tbodyTreinadores.innerHTML = ``;

    let list = await getAllTreinadores();

    console.log(list);

    for (const treinador of list) {
        const row = document.createElement('tr');

        const tdNome = document.createElement('td');
        const divExternaNomes = document.createElement('div');
        divExternaNomes.classList.add('d-flex', 'px-2', 'py-1');

        const divInternaNomes = document.createElement('div');
        divInternaNomes.classList.add('d-flex', 'flex-column', 'justify-content-center');

        const nomeTreinador = document.createElement('p');
        nomeTreinador.classList.add('text-xs', 'text-secondary', 'mb-0');
        nomeTreinador.innerText = treinador.nome;

        divInternaNomes.append(nomeTreinador);
        divExternaNomes.append(divInternaNomes);
        tdNome.append(divExternaNomes);
        row.append(tdNome);

        const tdFuncao = document.createElement('td');

        const nomeFuncao = document.createElement('p');
        nomeFuncao.classList.add('text-xs', 'text-secondary', 'mb-0');
        nomeFuncao.innerText = treinador.role;

        tdFuncao.append(nomeFuncao);
        row.append(tdFuncao);

        const tdCpf = document.createElement('td');
        tdCpf.classList.add('align-middle', 'text-center', 'text-sm');

        const cpf = document.createElement('p');
        cpf.classList.add('text-xs', 'text-secondary', 'mb-0');

        cpf.innerText = [treinador.cpf.slice(0, 3), '.', 
            treinador.cpf.slice(3, 6), '.', treinador.cpf.slice(6, 9), '-', 
            treinador.cpf.slice(-2)].join('');

        tdCpf.append(cpf);
        row.append(tdCpf);

        const tdEmail = document.createElement('td');
        tdEmail.classList.add('align-middle', 'text-center', 'mb-0');

        const email = document.createElement('span');
        email.classList.add('text-xs', 'text-secondary', 'font-weight-bold');
        email.innerText = treinador.email;

        tdEmail.append(email);
        row.append(tdEmail);

        const editar = document.createElement('td')
        editar.classList.add('align-middle');
        editar.innerHTML = `
                    <a href="paginaTreinamento.html" class="text-secondary font-weight-bold text-xs" 
                        data-toggle="tooltip"
                        data-original-title="Edit user" data-bs-toggle="modal" 
                        data-bs-target="#EditTreinadorModal" data-bs-whatever="@mdo">
                        Editar
                    </a>`

        row.append(editar);

        tbodyTreinadores.append(row);
    }
}

async function getAllFuncionarios() {

    let request = await fetch("http://localhost:8080/funcionarios", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sessionStorage.getItem('token')}`
        }
    })

    console.log(request)

    return await request.json();

}

async function listAllFuncionarios() {

    tbodyFuncionarios.innerHTML = ``;

    let list = await getAllFuncionarios();

    console.log(list);

    for (const funcionario of list) {
        console.log(funcionario)
        const row = document.createElement('tr');

        const tdNome = document.createElement('td');
        const divExternaNomes = document.createElement('div');
        divExternaNomes.classList.add('d-flex', 'px-2', 'py-1');

        const divInternaNomes = document.createElement('div');
        divInternaNomes.classList.add('d-flex', 'flex-column', 'justify-content-center');

        const nomeTreinador = document.createElement('p');
        nomeTreinador.classList.add('text-xs', 'text-secondary', 'mb-0');
        nomeTreinador.innerText = funcionario.nome;

        divInternaNomes.append(nomeTreinador);
        divExternaNomes.append(divInternaNomes);
        tdNome.append(divExternaNomes);
        row.append(tdNome);

        const tdDepartamento = document.createElement('td');

        const nomeDepartamento = document.createElement('p');
        nomeDepartamento.classList.add('text-xs', 'text-secondary', 'mb-0');
        nomeDepartamento.innerText = funcionario.departamento.nome;

        tdDepartamento.append(nomeDepartamento);
        row.append(tdDepartamento);

        const tdCpf = document.createElement('td');
        tdCpf.classList.add('align-middle', 'text-center', 'text-sm');

        const cpf = document.createElement('p');
        cpf.classList.add('text-xs', 'text-secondary', 'mb-0');

        cpf.innerText = [funcionario.cpf.slice(0, 3), '.', funcionario.cpf.slice(3, 6), '.', funcionario.cpf.slice(6, 9), '-', funcionario.cpf.slice(-2)].join('');

        tdCpf.append(cpf);
        row.append(tdCpf);

        const tdEmail = document.createElement('td');
        tdEmail.classList.add('align-middle', 'text-center', 'mb-0');

        const email = document.createElement('span');
        email.classList.add('text-xs', 'text-secondary', 'font-weight-bold');
        email.innerText = funcionario.email;

        tdEmail.append(email);
        row.append(tdEmail);

        const editar = document.createElement('td')
        editar.classList.add('align-middle');
        editar.innerHTML = `
            <a href="paginaTreinamento.html" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip"
                data-original-title="Edit user">
                Editar
            </a>`

        row.append(editar);

        tbodyFuncionarios.append(row);
    }
}

async function getAllDepartamentos() {
    
    let request = await fetch("http://localhost:8080/departamentos", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sessionStorage.getItem('token')}`
        }
    })

    console.log(request)

    return await request.json();
}

async function listAllDepartamentos() {
    selectDepartamentoFuncionario.innerHTML = `<option selected disabled>Escolha um departamento</option>`

    let list = await getAllDepartamentos();

    for(const departamento of list){

        const option = document.createElement('option');
        option.innerText = departamento.nome;
        option.value = departamento.id;

        selectDepartamentoFuncionario.append(option);
    }
}

async function insertTreinador(user) {

    console.log(user)

    // var data = new FormData();
    // data.append("json", JSON.stringify(user));

    var data = JSON.stringify(user);

    console.log(data)

    const request = await fetch("http://localhost:8080/treinadores", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sessionStorage.getItem('token')}`
        },
        body: data
    });

    if(request.status == 201){
        const result = await request.json();
        listAllTreinadores();
        alert('Cadastrado com Sucesso!');
    }
    console.log(result);
}

async function insertFuncionario(user) {

    console.log(user)

    // var data = new FormData();
    // data.append("json", JSON.stringify(user));

    var data = JSON.stringify(user);

    console.log(data)

    const request = await fetch("http://localhost:8080/funcionarios", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sessionStorage.getItem('token')}`
        },
        body: data
    });
    
    if(request.status == 201){
        const result = await request.json();
        listAllFuncionarios();
        alert('Cadastrado com Sucesso!');
    }
    console.log(result);
}