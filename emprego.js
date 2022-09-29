const vacancy = [];

function menu() {
    return prompt(`Vagas de emprego\n
    1. Listar vagas disponíveis
    2. Criar uma nova vaga.
    3. Visualizar uma vaga.
    4. Inscrever um candidato em uma vaga.
    5. Excluir uma vaga.
    6. Sair`)
}

function listVacancy() {
    if (vacancy.length !== 0) {
        for (let i = 0; i < vacancy.length; i++) {
            let analise = vacancy[i].applicant.length ? `Número de candidatos: ${vacancy[i].applicant.length}
            Nome dos candidatos: ${vacancy[i].applicant}
            ` : `Não há candidatos inscritos`;
            alert(`Vaga número: ${i + 1}
            Nome da vaga: ${vacancy[i].nameVacancy}
            ${analise}
        `)
        }
    } else {
        alert('Não há vagas')
    }
}

function createVacancy() {
    const registration = {}
    let counter = 0;
    registration.nameVacancy = prompt('Insira o nome da vaga.')
    registration.descripVacancy = prompt('Insira uma breve descrição da vaga.')
    registration.dateVacancy = prompt('Insira a data limite da vaga.')
    registration.applicant = [];

    const confirmation = confirm('Deseja salvar esses dados?');
    if (confirmation) {
        vacancy.push(registration)
        registration.index = counter += vacancy.length
        alert("Salvando dados!!")
    } else {
        alert("Retornando para o menu de opções.")
    }
}

function viewVacancy() {
    const value = parseFloat(prompt('Insira o índice da vaga desejada'))
    if (value <= vacancy.length) {
        alert(`
    A vaga número ${vacancy[value - 1].index}
    Como o nome ${vacancy[value - 1].nameVacancy}
    Com a descrição: ${vacancy[value - 1].descripVacancy}
    Data limite: ${vacancy[value - 1].dateVacancy}
`)
    } else {
        alert('Não há vagas para esse índice!')
    }
}

function subscription() {
    const registration = (prompt('Insira o nome do candidato.'))
    const value = parseFloat(prompt('Insira o índice da vaga desejada'))

    const confirmation = confirm('Deseja salvar esses dados?')
    if (confirmation && value <= vacancy.length) {
        vacancy[value - 1].applicant.push(registration)
        alert('Inscrição realizada.')
    } else if (confirmation && value > vacancy.length) {
        alert('Não há mais vaga para esse índice! ')
    } else if (!confirmation) {
        alert('Cancelando...')
    }
}

function removingVacancy() {
    const index = parseFloat(prompt('Insira o índice da vaga que deseja remover!'))
    const confirmation = confirm(`Deseja remover essa vaga?\n
    Nome: ${vacancy[index - 1].nameVacancy}
    Descrição: ${vacancy[index - 1].descripVacancy}
    Data limite: ${vacancy[index - 1].dateVacancy}
    `)
    if (confirmation) {
        vacancy.splice(index - 1, 1)
        alert('Removendo...')
    } else {
        alert('Cancelando operação!')
    }
}

function callOfFunction() {
    let choose = '';
    do {
        choose = menu()
        switch (choose) {
            case '1':
                listVacancy()
                break;
            case '2':
                createVacancy()
                break;
            case '3':
                viewVacancy()
                break;
            case '4':
                subscription()
                break;
            case '5':
                removingVacancy()
                break;
            case '6':
                alert('Saindo...');
                break;
            default:
                alert('Opção inválida');
        }
    } while (choose !== '6');
}

callOfFunction()
console.log(vacancy)