// function Button () {
//     const name = 'Submit'

//     function changeName(){
//         name='Send'
//     }

//     changeName()

//     console.log(name)

//     return 'done'
// }

// Button()

// function Button () {
//     let value = 1
//     const name = 'Submit'

//     function changeName(){
//         // name='Send'
//         value = 100
//     }

//     changeName()

//     console.log(value)

//     return 'done'
// }

// Button()



// function Button() {
//     let value = 1
//     const name = 'Submit'


//     return `${name} - ${value}`
// }

// console.log(Button())


// let arr = [
//     { "nama": 1, 'dua': 2, 'tiga': 3 }, [4, 5], [6, 7, 8]
// ]

// console.log(arr[0].nama)


// const counter ={
//     val:0,

//     increment(){
//         this.val +=1
//     }
// }

// console.log(counter)
// counter.increment()
// console.log(counter)



// const sumArrow = (a,b) => a+b

// const thisArrow = () => this

// const thisFunction = function (){
//     return this
// }

// this.value = 1

// console.log(this)
// console.log(thisArrow)
// console.log(thisFunction)


// class Participant {
//     constructor (name) {
//         this.name = name
//     }
// }

// console.log(new Participant('Yos'))

// const Yos = new Participant('Yos')

// const Nio = new Participant('Nio')

// console.log({Yos, Nio})


// const classroom = {
//     participants: ['pieter', 'Esra', 'David', 'Yos'],
//     session:47,
//     name: 'FSD OCBC Batch 2'
// }

// const {name, participants, session} = classroom

// console.log(`
// Hallo ${name}!
// kita masuk kedalam sesi ${session}
// dengan bebebrapa peserta: ${participants.join(', ')}
// `)

function getParticipants (){
    return {
        participants: ['Pieter', 'Esra', 'David', 'Yos'],
        session:47,
        name: 'FSD OCBC Batch 2'
    }
}

const {name, participants: peserta , session} = getParticipants()
const [pieter, esra] =  peserta
peserta.unshift('Antonio')
console.log(`
Hallo ${name}!
kita masuk kedalam sesi ${session}
dengan bebebrapa peserta: ${pieter} ${esra}
`)