// const user = 'Sardor'

// // user += ' salom!'

// const user2 = user + ' salom'

// {}

// const obj = {}

// /* typeof - malumot turini qaytaradi */

// if(typeof obj === 'object') {
//     console.info('bu obyekt')
// }else if(typeof obj === 'string') {
//     console.info('bu string')
// }else {
//     console.info('topolmadim!!!')
// }

// const user = {
//     name: 'Sardor',
//     age: 32,
//     'salom dunyo': 'senga xam!'
// }

// // console.info(user)
// // console.info(user.name, user.age)
// // console.info(user.age)
// // console.info(user['salom dunyo'])

// // const isName = 'name' in user
// // const isFrom = 'from' in user
// // console.info(isName)
// // console.info(isFrom)


// user.from = 'Tashkent'

// const isFrom = 'from' in user
// // console.info(isFrom)

// user.name = 'Ali'

// // for(const key in user) { 
// //     console.info(key)
// //     // console.info(user[key])
// // }

// const myFrom = 'from'

// console.info(user[myFrom])


// const user = {
//     name: 'Sardor',
//     age: 32,
//     from: 'Tashkent'

// }

// for(const kalit in user) {
//     console.info('kaliti: ' + kalit + ' ,qiymati: ' + user[kalit])
//     console.info(`kaliti: ${kalit}\nqiymati: ${user[kalit]} `)
// }

// const user = {
//     name: 'Sardor',
//     age: 32,
//     addAge: function() {
//     //    console.info(this.name)
//     return ++this.age 
//     }
// }

// const users = {
//     '1': {
//         name: 'front-end',
//         age: 35
//     },
//     '2': {
//         name: 'Back-end',
//         age: 60
//     }
// }

// for(const key in users) {
//     console.info(users[key].name)
// }

// const id = 3
// users[id] = {
//     name: 'Sardor',
//     age: 32
// }

// console.info(users)

// const users = {}

/* HOMEWORK 1 - LS5_________________________________________________________________________________________________________ */

const users = {}

for (i = 1; i <= 10; i++) {
    let ism = prompt('Ismingiz?')
    let yosh = +prompt('Yoshingiz')
    const id = i
    users[id] = {
        name: ism,
        age: yosh
    }
}

for (const key in users) {
    console.info(`Foydalanuvchi ${key}\nIsmi ${users[key].name}\nYoshi ${users[key].age}`)
}

/* HOMEWORK 2 - LS5_________________________________________________________________________________________________________ */

function receipt() {
    const arrayReceipt = [{
        'Lavash': {
            info: 'Big Cheese',
            price: 15000
        }, 'Hot-dog': {
            info: 'mini',
            price: 8500
        }, 'Cola': {
            info: '1.5 L',
            price: 9000
        }

    }, {
        'Milk': {
            info: '1 L',
            price: 8500
        },
        'Sugar': {
            info: '1 kg',
            price: 7000
        }
    }, {
        'Cola': {
            info: '1 L',
            price: 6500
        },
        'Fanta': {
            info: '1.5 L',
            price: 9000
        },
        'Lipton': {
            info: '1.2 L',
            price: 5000
        },
        'Nestle': {
            info: '10 L',
            price: 8500
        }
    }]
    const count = Math.floor(Math.random() * arrayReceipt.length)
    return arrayReceipt[count]
}

let data = receipt()
let summa = 9000
let nom = ''
let info = ''

for (const key in data) {

    summa += + data[key].price
    nom = nom + key + ' ' + data[key].info + ' ' + data[key].price + '\n'
}

console.info("Sizning buyurtmangiz:" + '\n' + nom + 'Umumiy:' + '\n' + summa + ' Yetkazib berish bilan (9000 sum)')


