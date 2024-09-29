export default class Treinamento {
    constructor(id, descricao, data_criacao, data_ultima_alteracao, titulo, corpo_texto, tipo, status, treinador, tags, listaDePresencaList, departamentos) {
        this.id = id,
        this.descricao = descricao,
        this.data_criacao = data_criacao,
        this.data_ultima_alteracao = data_ultima_alteracao,
        this.titulo = titulo,
        this.corpo_texto = corpo_texto,
        this.tipo = tipo,
        this.status = status,
        this.treinador = treinador,
        this.tags = tags,
        this.listaDePresencaList = listaDePresencaList,
        this.departamentos = departamentos;
    }
}