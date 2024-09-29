export default function getAllTreinamentos(){
    
    const treinamentos = [];

    fetch("http://localhost:8080/treinamentos", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(res => { return res.json() }).then(data => {
        data.array.forEach(t => {
            const treinamento = {
                id: t.id,
                descricao: t.descricao,
                dataCriacao: t.data_criacao,
                dataUltimaAlteracao: t.data_ultima_alteracao,
                titulo: t.titulo,
                corpoTexto: t.corpoTexto,
                tipo: t.tipo,
                status: t.status,
                treinador : t.treinador,
                tags: t.tags,
                listaDePresencaList: t.listaDePresencaList,
                departamentos: t.departamentos
            }
            treinamentos.push(treinamento);
        });
    })

    return treinamentos;
}