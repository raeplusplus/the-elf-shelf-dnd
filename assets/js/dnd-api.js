
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
    const choice = document.querySelector('input').value 
    const url = `https://www.dnd5eapi.co`

    fetch(`${url}/api/spells/${choice}`)
        .then(res => res.json())
        .then(data => {
            console.log(data.subclasses)
            data.subclasses.forEach( obj => {
                //create an li
            const li = document.createElement('li')
                //add text to the li
            li.textContent = obj.name
                //append the li to the ul
            document.querySelector('ul').appendChild(li)
            })

        })
}






























// const express = require('express')
// const app = express()
// const cors = require('cors')
// const { response } = require('express')
// const PORT = 8000

// app.use(cors())
// app.use(express.json())

// const url = 'https://www.dnd5eapi.co'
// app.get(`${url}/`, (req, res) => {
//     res.sendFile(__dirname + '/index.html')
// })

// app.get(`${url}/api/monsters/:monsterName`, (req, res) => {
//     const monstersName = document.getElementById('monsterInput').value.toLowerCase()
//         .then(res => {
//             res.json()
//         })

// })

// app.get(`${url}/api/spells/:spellName`, (req, res) => {
//     const spellsName = document.getElementById('spellInput').value.toLowerCase()


// })

// app.get('/api/classes/:className', (req, res) => {
//     const classesName = document.getElementById('classInput').value.toLowerCase()
    

// })

// app.get('/api/spells/:spellName', (req, res) => {
//     const spellsName = document.getElementById('spellInput').value.toLowerCase()
    

// })