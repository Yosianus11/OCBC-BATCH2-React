// Callback
// function myDisplayer(some) {
//     console.log(some)
// }

// function myCalculator(num1, num2, myCallback) {
//     let sum = num1 + num2
//     myCallback(sum)
// }                                                                               


// myCalculator(2, 1, myDisplayer)
// myCalculator(2,1, (value)=>{console.log(value)})

// promise 

const buatJanji = (message) => {
    return new Promise((resolve, reject) => {
        if (message === '')
            return reject('Janji Harus di isi')

        return resolve(`Janji berhasil di tepat dengan janji ${message}`)
    })
}

console.log(buatJanji('adakan kelas akhir tahun'))

buatJanji('Kelas Akhir tahun')
.then((result) => {
    console.log(result)

    return buatJanji('Kelas awal tahun')
})
.then((result) => {
    console.log(result)
})
.catch((err) => {
    console.log(err)
})


const axios = require('axios');
const ambilData= ()=>{
    return new Promise((resolve, reject)=>{
        axios.get('https://h8ocbc2-milestone1-007.herokuapp.com/api/movies?order_by=budget&sort=desc&limit=1')
        .then(result =>{
            resolve(result)
        })
        .catch(err =>{
            reject(err)
        })
    })
}

console.log(ambilData())


