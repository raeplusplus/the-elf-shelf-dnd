const url = `https://www.dnd5eapi.co`

document.getElementById('spellButton').addEventListener('click', getSpells)

async function getSpells(){
    const spellChoice = document.querySelector('input').value 
    try{
        const response = await fetch(`${url}/api/spells/${spellChoice}`)
        const data = await response.json()

        console.log(data)

        document.getElementById('spellName').innerText = data.name
        document.getElementById('spellDesc').innerText = data.desc
        document.getElementById('spellAttackType').innerText = data.mm
        document.getElementById('spellRange').innerText = data.mm
        document.getElementById('spellCastingTime').innerText = data.mm
        document.getElementById('spellSchool').innerText = data.mm
        document.getElementById('spellRitual').innerText = data.mm
        document.getElementById('spellClasses').innerText = data.mm
        document.getElementById('spellSubClasses').innerText = data.subclasses.forEach(obj => {
            const li = document.createElement('li')
            li.textContent = obj.name
            document.querySelector('ul').appendChild(li)
        })
        document.getElementById('spellConcentration').innerText = data.mm
        document.getElementById('spellDamageType').innerText = data.mm
        document.getElementById('spellDC').innerText = data.mm
    }catch(error){
        console.log(error)
    }
}

document.getElementById('monsterButton').addEventListener('click', getMonster)

async function getMonster(){
    const monsterChoice = document.querySelector('input').value 
    try{
        const response = await fetch(`${url}/api/monster/${monsterChoice}`)
        const data = await response.json()

        console.log(data)

        document.getElementById('monsterName').innerText = data.mm
        document.getElementById('monsterAlign').innerText = data.mm
        document.getElementById('monsterSpeed').innerText = data.mm
        document.getElementById('monsterType').innerText = data.mm
        document.getElementById('monsterXP').innerText = data.mm
        document.getElementById('monsterAC').innerText = data.mm
        document.getElementById('monsterCR').innerText = data.mm
        document.getElementById('monsterCHA').innerText = data.mm
        document.getElementById('monsterCON').innerText = data.
        document.getElementById('monsterDEX').innerText = data.mm
        document.getElementById('monsterSTR').innerText = data.mm
        document.getElementById('monsterWIS').innerText = data.mm
        document.getElementById('monsterINT').innerText = data.mm
    }catch(error){
        console.log(error)
    }
}
document.getElementById('raceButton').addEventListener('click', getRace)

async function getRace(){
    const raceChoice = document.querySelector('input').value 
    try{
        const response = await fetch(`${url}/api/race/${raceChoice}`)
        const data = await response.json()

        console.log(data)

        document.getElementById('raceName').innerText = data.mm
        document.getElementById('raceAlign').innerText = data.mm
        document.getElementById('raceAge').innerText = data.mm
        document.getElementById('raceLang').innerText = data.mm
        document.getElementById('raceSize').innerText = data.mm
        document.getElementById('raceSub').innerText = data.mm
        document.getElementById('raceTrait').innerText = data.mm
        document.getElementById('raceProf').innerText = data.mm
    }catch(error){
        console.log(error)
    }
}
document.getElementById('classButton').addEventListener('click', getClass)

async function getClass(){
    const classChoice = document.querySelector('input').value 
    try{
        const response = await fetch(`${url}/api/class/${classChoice}`)
        const data = await response.json()

        console.log(data)

        document.getElementById('className').innerText = data.mm
        document.getElementById('classProf').innerText = data.mm
        document.getElementById('classSub').innerText = data.mm
    }catch(error){
        console.log(error)
    }
}
document.getElementById('backgroundButton').addEventListener('click', getBackground)

async function getBackground(){
    const backgroundChoice = document.querySelector('input').value 
    try{
        const response = await fetch(`${url}/api/background${backgroundChoice}`)
        const data = await response.json()

        console.log(data)

        document.getElementById('backgroundName').innerText = data.name
        document.getElementById('backgroundFeature').innerText = data.feature.name
        document.getElementById('backgroundFeatureDesc').innerText = data.feature.desc
        document.getElementById('backgroundProf').innerText = data.starting_proficiencies //add the forEach
    }catch(error){
        console.log(error)
    }
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