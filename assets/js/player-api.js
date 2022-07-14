document.getElementById('raceButton').addEventListener('click', getRace)

function getRace(){
    const raceChoice = document.getElementById('raceInput').value.split(" ").join("-")
    const url = `https://www.dnd5eapi.co/api/races/${raceChoice}`
        
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)

        document.getElementById('raceName').textContent += data.name
        document.getElementById('raceAlign').textContent += data.alignment
        document.getElementById('raceAge').textContent += data.age
        document.getElementById('raceLang').textContent += data.language_desc
        document.getElementById('raceSize').textContent += data.size_description
        // document.getElementById('raceSub').innerText = data.subraces.forEach(obj => {
        //     const li = document.createElement('li')
        //     li.textContent = obj.name
        //     document.querySelector('ul').appendChild(li)
        // })
        // document.getElementById('raceTrait').textContent += data.traits
        // document.getElementById('raceProf').innerText = data.starting_proficiencies.forEach(obj => {
        //     const li = document.createElement('li')
        //     li.textContent = obj.name
        //     document.querySelector('ul').appendChild(li)
        // })
        })
}
document.getElementById('classButton').addEventListener('click', getClass)

function getClass(){
    const classChoice = document.getElementById('classInput').value.split(" ").join("-")
    const url = `https://www.dnd5eapi.co/api/classes/${classChoice}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)

        document.getElementById('className').textContent += data.name
        document.getElementById('classHitDie').textContent += data.hit_die
        
        // document.getElementById('classProf').innerText = data.proficiencies.forEach(obj => {
        //     const li = document.createElement('li')
        //     li.textContent = obj.name
        //     document.querySelector('ul').appendChild(li)
        // })
        // document.getElementById('classSub').innerText = data.subclasses.forEach(obj => {
        //     const li = document.createElement('li')
        //     li.textContent = obj.name
        //     document.querySelector('ul').appendChild(li)
        // })
        }) 
}
document.getElementById('backgroundButton').addEventListener('click', getBackground)

function getBackground(){
    const backgroundChoice = document.getElementById('backgroundInput').value 
    
        const url = `https://www.dnd5eapi.co/api/backgrounds/${backgroundChoice}`
        
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)

        document.getElementById('backgroundName').textContent += data.name
        document.getElementById('backgroundFeature').textContent += data.feature.name
        document.getElementById('backgroundFeatureDesc').textContent += data.feature.desc
        // document.getElementById('backgroundProf').textContent += data.starting_proficiencies.forEach(obj => {
        //     const li = document.createElement('li')
        //     li.textContent = obj.name
        //     document.querySelector('ul').appendChild(li)
        // })
        })
}












