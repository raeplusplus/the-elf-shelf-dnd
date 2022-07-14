document.getElementById('spellButton').addEventListener('click', getSpells)

function getSpells(){
    const spellChoice = document.getElementById('spellInput').value.toLowerCase().split(" ").join("-") 
    const url = `https://www.dnd5eapi.co/api/spells/${spellChoice}`
    
    fetch(url)
        .then(res => res.json())
        .then(data => {
            
            console.log(data);
        document.getElementById('spellName').innerHTML = "<strong>Spell Name:</strong> " + data.name
        document.getElementById('spellDesc').innerHTML = "<strong>Description: </strong>" + data.desc
        document.getElementById('spellRange').innerHTML = "<strong>Range: </strong>" + data.range
        document.getElementById('spellCastingTime').innerHTML = "<strong>Casting Time: </strong>" + data.casting_time
        })
}

document.getElementById('monsterButton').addEventListener('click', getMonster)

function getMonster(){
    const monsterChoice = document.getElementById('monsterInput').value.toLowerCase().split(" ").join("-") 
    
    const url = `https://www.dnd5eapi.co/api/monsters/${monsterChoice}`

        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)

                document.getElementById('monsterName').innerHTML = "<strong>Monster Name: </strong>" + data.name
                document.getElementById('monsterAlign').innerHTML = "<strong>Alignment: </strong>" + data.alignment
                document.getElementById('monsterType').innerHTML = "<strong>Type: </strong>" + data.type
            })

        
        
}