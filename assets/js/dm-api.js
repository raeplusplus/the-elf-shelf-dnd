document.getElementById('spellButton').addEventListener('click', getSpells)

function getSpells(){
    const spellChoice = document.getElementById('spellInput').value.split(" ").join("-") 
    const url = `https://www.dnd5eapi.co/api/spells/${spellChoice}`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            
            console.log(data);
        document.getElementById('spellName').innerText = data.name
        document.getElementById('spellDesc').innerText = data.desc
        // document.getElementById('spellAttackType').textContent += data.attack_type
        document.getElementById('spellRange').innerText = data.range
        document.getElementById('spellCastingTime').innerText = data.casting_time
        // document.getElementById('spellSchool').textContent += data.school
        // document.getElementById('spellRitual').innerText = data.ritual
        // document.getElementById('spellConcentration').innerText = data.concentration
        // document.getElementById('spellLevel').textContent += data.level
        // document.getElementById('spellClasses').textContent += data.classes.forEach(obj => {
        //     const li = document.createElement('li')
        //     li.textContent = obj.name
        //     document.querySelector('ul').appendChild(li)
        // })
        // document.getElementById('spellSubClasses').textContent += data.subclasses.  forEach(obj => {
        //     const li = document.createElement('li')
        //     li.textContent += obj.name
        //     document.querySelector('ul').appendChild(li)
        // })

      
        // .catch(err => {
        //     console.log(`error ${err}`)
        // })
        })
}

document.getElementById('monsterButton').addEventListener('click', getMonster)

function getMonster(){
    const monsterChoice = document.getElementById('monsterInput').value.split(" ").join("-") 
    
    const url = `https://www.dnd5eapi.co/api/monsters/${monsterChoice}`

        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)

                document.getElementById('monsterName').innerText = data.name
                document.getElementById('monsterAlign').innerText = data.alignment
                // document.getElementById('monsterWalkSpeed').innerText = data.speed.walk
                // document.getElementById('monsterFlySpeed').innerText = data.speed.fly
                // document.getElementById('monsterSwimSpeed').innerText = data.speed.swim
                document.getElementById('monsterType').innerText = data.type
                // document.getElementById('monstorHP').textContent += data.hit_points
                // document.getElementById('monsterHitDice').innerText += data.hit_die
                // document.getElementById('monsterXP').innerText += data.xp.toString()
                // document.getElementById('monsterAC').innerText += data.armor_class
                // document.getElementById('monsterCR').innerText += data.challenge_rating
                // document.getElementById('monsterCHA').innerText += data.charisma
                // document.getElementById('monsterCON').innerText += data.constitution
                // document.getElementById('monsterDEX').innerText += data.dexterity
                // document.getElementById('monsterSTR').innerText += data.strength
                // document.getElementById('monsterWIS').innerText += data.wisdom
                // document.getElementById('monsterINT').innerText += data.intelligence

                // .catch(err => {
                //     console.log(`error ${err}`)
                // })
            })

        
        
}