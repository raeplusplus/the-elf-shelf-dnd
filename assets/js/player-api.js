document.getElementById('raceButton').addEventListener('click', getRace)

function getRace(){
    const raceChoice = document.getElementById('raceInput').value.split(" ").join("-")
    const url = `https://www.dnd5eapi.co/api/races/${raceChoice}`
        
    
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            

            // document.getElementById('raceName').textContent.find('p').empty()

        document.getElementById('raceName').innerHTML = data.name
        document.getElementById('raceAlign').innerText = data.alignment
        document.getElementById('raceAge').innerText = data.age
        document.getElementById('raceLang').innerText = data.language_desc
        document.getElementById('raceSize').innerText = data.size_description
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
        // location.reload()
}
document.getElementById('classButton').addEventListener('click', getClass)

function getClass(){
    const classChoice = document.getElementById('classInput').value.split(" ").join("-")
    const url = `https://www.dnd5eapi.co/api/classes/${classChoice}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)

        document.getElementById('className').innerText = data.name
        document.getElementById('classHitDie').innerText = data.hit_die
        
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

        document.getElementById('backgroundName').innerText = data.name
        document.getElementById('backgroundFeature').innerText = data.feature.name
        document.getElementById('backgroundFeatureDesc').innerText = data.feature.desc
        // document.getElementById('backgroundProf').textContent += data.starting_proficiencies.forEach(obj => {
        //     const li = document.createElement('li')
        //     li.textContent = obj.name
        //     document.querySelector('ul').appendChild(li)
        // })
        })
}












