function main() {
    const carros = [
        {
            nome: 'Fusca',
            id: 1,
            valor: 250.00
        },
        {
            nome: 'Fiat Pálio',
            id: 2,
            valor: 300.00
        },
        {
            nome: 'Uno 2007',
            id: 3,
            valor: 500.00
        }
    ]

    const alugados = []

    let option = 0

    while (option !== 9) {
        option = Number(prompt("ALUGUEL DE CARROS\n1 - Listar \n2 - Alugar\n3 - Devolver\n9 - Sair"))

        switch (option) {
            case 1:
                listarCarros()
                break
            case 2:
                alugarCarro()
                break
            case 3:
                devolverCarro()
                break
            case 9:
                alert("Tchau!")
                break
            default:
                alert("Opção inválida!")
        }
    }

    function listarCarros() {
        let string = "CARROS DISPONÍVEIS\n"
        for (let i = 0; i < carros.length; i++) {
            string += `${carros[i].id} - ${carros[i].nome} - R$ ${carros[i].valor}\n`
        }

        alert(string)
    }


    function alugarCarro() {
        const id = Number(prompt("Informe o ID do carro que deseja alugar: "))
        let found = false
        for (let i = 0; i < carros.length; i++) {
            if (carros[i].id === id){
                alugados.push(carros[i])
                
                carros.splice(i, 1)
                alert("Carro alugado com sucesso!")
                found = true
                break
            }
        }

        if (!found) {
            alert("Carro não encontrado!")
        }
    }


    function devolverCarro() {
        const id = Number(prompt("Informe o ID do carro que deseja devolver: "))
        let found = false
        for (let i = 0; i < alugados.length; i++) {
            if (alugados[i].id === id){
                carros.push(alugados[i])
                
                alugados.splice(i, 1)
                alert("Carro devolvido com sucesso!")
                found = true
                break
            }
        }

        if (!found) {
            alert("Carro não encontrado!")
        }
    }


}
main()