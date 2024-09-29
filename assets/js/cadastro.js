const tbodyTreinadores = document.querySelector('#tb-treinadores');
const tbodyFuncionarios = document.querySelector('#tb-funcionarios');
const formTreinador = document.querySelector('#form-cadastro-treinador');
const btnCadastroTreinadores = document.querySelector('#btn-cadastro-treinadores');
const btnCadastroUsuarios = document.querySelector('#btn-cadastro-usuarios');

const nomeTreinador = document.getElementById('input-nome-treinador');
const roleTreinador = document.getElementById('input-role-treinador');
const cpfTreinador = document.getElementById('input-cpf-treinador');
const emailTreinador = document.getElementById('input-email-treinador');
const senhaTreinador = document.getElementById('input-senha-treinador');

const nomeErroTreinador = document.getElementById('nome-obrigatorio');
const roleErroTreinador = document.getElementById('role-obrigatorio');
const cpfErroTreinador = document.getElementById('cpf-obrigatorio');
const emailErroTreinador = document.getElementById('email-obrigatorio');
const senhaErroTreinador = document.getElementById('senha-obrigatorio');

formTreinador.addEventListener('submit', (e) => {
    
    e.preventDefault();

    if(!nomeErroTreinador.classList.contains('hidden')) nomeErroTreinador.classList.toggle('hidden');
    if(!roleErroTreinador.classList.contains('hidden')) roleErroTreinador.classList.toggle('hidden');
    if(!cpfErroTreinador.classList.contains('hidden')) cpfErroTreinador.classList.toggle('hidden');
    if(!emailErroTreinador.classList.contains('hidden')) emailErroTreinador.classList.toggle('hidden');
    if(!senhaErroTreinador.classList.contains('hidden')) senhaErroTreinador.classList.toggle('hidden');


    if(nomeTreinador.value.trim() == "" || roleTreinador.value.trim() == "" || cpfTreinador.value.trim() == "" || emailTreinador.value.trim() == "" || senhaTreinador.value.trim() == ""){

        if(nomeTreinador.value.trim() == ""){
            nomeErroTreinador.innerText = 'CAMPO OBRIGATÓRIO.';
            nomeErroTreinador.classList.toggle('hidden')
        } 
        if(roleTreinador.value.trim() == "") {
                roleErroTreinador.innerText = 'CAMPO OBRIGATÓRIO.';
                roleErroTreinador.classList.toggle('hidden')
            } 
        if(cpfTreinador.value.trim() == ""){
            cpfErroTreinador.innerText = 'CAMPO OBRIGATÓRIO.';
            cpfErroTreinador.classList.toggle('hidden')

        } 
        if(emailTreinador.value.trim() == ""){
            emailErroTreinador.innerText = 'CAMPO OBRIGATÓRIO.';
            emailErroTreinador.classList.toggle('hidden')

        } 
        if(senhaTreinador.value.trim() == ""){
            senhaErroTreinador.innerText = 'CAMPO OBRIGATÓRIO.';
            senhaErroTreinador.classList.toggle('hidden')
            
        } 
        
    }else if (senhaTreinador.value.length < 6){
        senhaErroTreinador.innerText = 'Senha deve conter no minimo 6 caractéres.';
        if(senhaErroTreinador.classList.contains('hidden')) senhaErroTreinador.classList.toggle('hidden')
    } else if (cpfTreinador.value.length != 11){
        cpfErroTreinador.innerText = 'CPF deve ter 11 algarismos.';
        if(cpfErroTreinador.classList.contains('hidden')) cpfErroTreinador.classList.toggle('hidden')
    } else{

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

fetch("http://localhost:8080/treinadores", {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    }
}).then(res => { return res.json() })
    .then(data => {
        console.log(data)
        data.forEach(trein => {

            const row = document.createElement('tr');

            const tdNome = document.createElement('td');
            const divExternaNomes = document.createElement('div');
            divExternaNomes.classList.add('d-flex', 'px-2', 'py-1');

            const divInternaNomes = document.createElement('div');
            divInternaNomes.classList.add('d-flex', 'flex-column', 'justify-content-center');

            const nomeTreinador = document.createElement('p');
            nomeTreinador.classList.add('text-xs', 'text-secondary', 'mb-0');
            nomeTreinador.innerText = trein.nome;

            divInternaNomes.append(nomeTreinador);
            divExternaNomes.append(divInternaNomes);
            tdNome.append(divExternaNomes);
            row.append(tdNome);

            const tdFuncao = document.createElement('td');

            const nomeFuncao = document.createElement('p');
            nomeFuncao.classList.add('text-xs', 'text-secondary', 'mb-0');
            nomeFuncao.innerText = trein.role;

            tdFuncao.append(nomeFuncao);
            row.append(tdFuncao);

            const tdCpf = document.createElement('td');
            tdCpf.classList.add('align-middle', 'text-center', 'text-sm');

            const cpf = document.createElement('p');
            cpf.classList.add('text-xs', 'text-secondary', 'mb-0');

            cpf.innerText = [trein.cpf.slice(0, 3), '.', trein.cpf.slice(3, 6), '.', trein.cpf.slice(6, 9), '-', trein.cpf.slice(-2)].join('');

            tdCpf.append(cpf);
            row.append(tdCpf);

            const tdEmail = document.createElement('td');
            tdEmail.classList.add('align-middle', 'text-center', 'mb-0');

            const email = document.createElement('span');
            email.classList.add('text-xs', 'text-secondary', 'font-weight-bold');
            email.innerText = trein.email;

            tdEmail.append(email);
            row.append(tdEmail);

            const editar = document.createElement('td')
            editar.classList.add('align-middle');
            editar.innerHTML = `
                    <a href="paginaTreinamento.html" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip"
                        data-original-title="Edit user" data-bs-toggle="modal" data-bs-target="#EditTreinadorModal" data-bs-whatever="@mdo">
                        Editar
                    </a>`

            row.append(editar);

            tbodyTreinadores.append(row);
        })
    })

fetch("http://localhost:8080/funcionarios", {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    }
}).then(res => { return res.json() })
    .then(data => {
        console.log(data)
        data.forEach(func => {

            const row = document.createElement('tr');

            const tdNome = document.createElement('td');
            const divExternaNomes = document.createElement('div');
            divExternaNomes.classList.add('d-flex', 'px-2', 'py-1');

            const divInternaNomes = document.createElement('div');
            divInternaNomes.classList.add('d-flex', 'flex-column', 'justify-content-center');

            const nomeTreinador = document.createElement('p');
            nomeTreinador.classList.add('text-xs', 'text-secondary', 'mb-0');
            nomeTreinador.innerText = func.nome;

            divInternaNomes.append(nomeTreinador);
            divExternaNomes.append(divInternaNomes);
            tdNome.append(divExternaNomes);
            row.append(tdNome);

            const tdDepartamento = document.createElement('td');

            const nomeDepartamento = document.createElement('p');
            nomeDepartamento.classList.add('text-xs', 'text-secondary', 'mb-0');
            nomeDepartamento.innerText = func.departamento.nome;

            tdDepartamento.append(nomeDepartamento);
            row.append(tdDepartamento);

            const tdCpf = document.createElement('td');
            tdCpf.classList.add('align-middle', 'text-center', 'text-sm');

            const cpf = document.createElement('p');
            cpf.classList.add('text-xs', 'text-secondary', 'mb-0');

            cpf.innerText = [func.cpf.slice(0, 3), '.', func.cpf.slice(3, 6), '.', func.cpf.slice(6, 9), '-', func.cpf.slice(-2)].join('');

            tdCpf.append(cpf);
            row.append(tdCpf);

            const tdEmail = document.createElement('td');
            tdEmail.classList.add('align-middle', 'text-center', 'mb-0');

            const email = document.createElement('span');
            email.classList.add('text-xs', 'text-secondary', 'font-weight-bold');
            email.innerText = func.email;

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
        })
    })

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
            // 'Authorization': 'Bearer ${token}'
        },
        body: data
    });

    const result = await request.json();

    console.log(result);

}