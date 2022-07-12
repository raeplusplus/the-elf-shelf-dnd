document.getElementById('spellButton').addEventListener('click', getSpells)

async function getSpells(){
    const spellChoice = document.querySelector('input').value.toLowerCase 
    try{
        const response = await fetch(`https://www.dnd5eapi.co/api/spells/${spellChoice}`)
        const data = await response.json()

        console.log(data)

        document.getElementById('spellName').textContent += data.name
        document.getElementById('spellDesc').textContent += data.desc
        document.getElementById('spellAttackType').textContent += data.attack_type
        document.getElementById('spellRange').textContent += data.range
        document.getElementById('spellCastingTime').textContent += data.casting_time
        document.getElementById('spellSchool').textContent += data.school
        document.getElementById('spellRitual').textContent += data.ritual
        document.getElementById('spellClasses').textContent += data.classes.forEach(obj => {
            const li = document.createElement('li')
            li.textContent = obj.name
            document.querySelector('ul').appendChild(li)
        })
        document.getElementById('spellSubClasses').textContent += data.subclasses.forEach(obj => {
            const li = document.createElement('li')
            li.textContent += obj.name
            document.querySelector('ul').appendChild(li)
        })
        document.getElementById('spellConcentration').textContent += data.concentration
        document.getElementById('spellDamageType').textContent += data.damage.damage_type
        document.getElementById('spellDC').textContent += data.dc
    }catch(error){
        console.log(error)
    }
}

document.getElementById('monsterButton').addEventListener('click', getMonster)

async function getMonster(){
    const monsterChoice = document.querySelector('input').value 
    try{
        const response = await fetch(`https://www.dnd5eapi.co/api/monster/${monsterChoice}`)
        const data = await response.json()

        console.log(data)

        document.getElementById('monsterName').innerText = data.name
        document.getElementById('monsterAlign').innerText = data.alignment
        document.getElementById('monsterSpeed').innerText = data.speed.forEach(obj => {
            const li = document.createElement('li')
            li.textContent = obj.name
            document.querySelector('ul').appendChild(li)
        })
        document.getElementById('monsterType').innerText = data.type
        document.getElementById('monstorHP').innerText = data.hit_points
        document.getElementById('monsterHitDice').innerText = data.hit_die
        document.getElementById('monsterXP').innerText = data.xp
        document.getElementById('monsterAC').innerText = data.armor_class
        document.getElementById('monsterCR').innerText = data.challenge_rating
        document.getElementById('monsterCHA').innerText = data.charisma
        document.getElementById('monsterCON').innerText = data.constitution
        document.getElementById('monsterDEX').innerText = data.dexterity
        document.getElementById('monsterSTR').innerText = data.strength
        document.getElementById('monsterWIS').innerText = data.wisdom
        document.getElementById('monsterINT').innerText = data.intelligence
    }catch(error){
        console.log(error)
    }
}
document.getElementById('raceButton').addEventListener('click', getRace)

async function getRace(){
    const raceChoice = document.querySelector('input').value 
    try{
        const response = await fetch(`https://www.dnd5eapi.co/api/race/${raceChoice}`)
        const data = await response.json()

        console.log(data)

        document.getElementById('raceName').innerText = data.name
        document.getElementById('raceAlign').innerText = data.alignment
        document.getElementById('raceAge').innerText = data.age
        document.getElementById('raceLang').innerText = data.language_desc
        document.getElementById('raceSize').innerText = data.size
        document.getElementById('raceSub').innerText = data.subraces.forEach(obj => {
            const li = document.createElement('li')
            li.textContent = obj.name
            document.querySelector('ul').appendChild(li)
        })
        document.getElementById('raceTrait').innerText = data.traits
        document.getElementById('raceProf').innerText = data.starting_proficiencies.forEach(obj => {
            const li = document.createElement('li')
            li.textContent = obj.name
            document.querySelector('ul').appendChild(li)
        })
    }catch(error){
        console.log(error)
    }
}
document.getElementById('classButton').addEventListener('click', getClass)

async function getClass(){
    const classChoice = document.querySelector('input').value 
    try{
        const response = await fetch(`https://www.dnd5eapi.co/api/class/${classChoice}`)
        const data = await response.json()

        console.log(data)

        document.getElementById('className').innerText = data.mm
        document.getElementById('classHitDie').innerText = data.hit_die
        document.getElementById('classProf').innerText = data.proficiencies.forEach(obj => {
            const li = document.createElement('li')
            li.textContent = obj.name
            document.querySelector('ul').appendChild(li)
        })
        document.getElementById('classSub').innerText = data.subclasses.forEach(obj => {
            const li = document.createElement('li')
            li.textContent = obj.name
            document.querySelector('ul').appendChild(li)
        })
    }catch(error){
        console.log(error)
    }
}
document.getElementById('backgroundButton').addEventListener('click', getBackground)

async function getBackground(){
    const backgroundChoice = document.querySelector('input').value 
    try{
        const response = await fetch(`https://www.dnd5eapi.co/api/background${backgroundChoice}`)
        const data = await response.json()

        console.log(data)

        document.getElementById('backgroundName').innerText = data.name
        document.getElementById('backgroundFeature').innerText = data.feature.name
        document.getElementById('backgroundFeatureDesc').innerText = data.feature.desc
        document.getElementById('backgroundProf').innerText = data.starting_proficiencies.forEach(obj => {
            const li = document.createElement('li')
            li.textContent = obj.name
            document.querySelector('ul').appendChild(li)
        })
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