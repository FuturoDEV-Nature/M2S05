const success = false

const dados = {
    nome: "Aurora",
    idade: 6,
}

// new Promise((resolve, reject) => {
//     // if(success) {
//     //     resolve("Tudo certo, segue o fluxo!")
//     // }
//     // reject("Deu ruim, corre!")
//     setTimeout(() => resolve(dados), 2000)
// })
// .then(resposta => {
//     console.log(resposta)
// })
// .catch(error => {
//     console.log(error)
// })
// .finally(() => {
//     console.log('finalizou todo processo')
// })
async function chamarDados() {
    try {
        const resposta = await new Promise((resolve, reject) => {
            // if(success) {
            //     resolve("Tudo certo, segue o fluxo!")
            // }
            // reject("Deu ruim, corre!")
            setTimeout(() => reject(dados), 2000)
        })
    
        console.log(resposta)

    } catch (error) {
        console.log("error => ", error)
    }
}

chamarDados()

// fetch("https://google.com.br")
// .then(resposta => console.log(resposta))
// .catch(error => console.log(error))