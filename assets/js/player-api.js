document.getElementById('raceButton').addEventListener('click', getRace)

function getRace(){
    const raceChoice = document.getElementById('raceInput').value.toLowerCase().split(" ").join("-")
    const url = `https://www.dnd5eapi.co/api/races/${raceChoice}`
        
    
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            

            // document.getElementById('raceName').textContent.find('p').empty()

        document.getElementById('raceName').innerHTML = "<strong>Race: </strong>" + data.name
        document.getElementById('raceAlign').innerHTML = "<strong>Alignment: </strong>" + data.alignment
        document.getElementById('raceAge').innerHTML = "<strong>Age: </strong>" + data.age
        document.getElementById('raceLang').innerHTML = "<strong>Language(s): </strong>" + data.language_desc
        document.getElementById('raceSize').innerHTML = "<strong>Size: </strong>" + data.size_description
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
    const classChoice = document.getElementById('classInput').value.toLowerCase().split(" ").join("-")
    const url = `https://www.dnd5eapi.co/api/classes/${classChoice}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)

        document.getElementById('className').innerHTML = "<strong>Class Name: </strong>" + data.name
        document.getElementById('classHitDie').innerHTML = "<strong>Hit Die: </strong>" + data.hit_die
        
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
    const backgroundChoice = document.getElementById('backgroundInput').value.toLowerCase().split(" ").join("-")
    
        const url = `https://www.dnd5eapi.co/api/backgrounds/${backgroundChoice}`
        
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)

        document.getElementById('backgroundName').innerHTML ="<strong>Background Name: </strong>" + data.name
        document.getElementById('backgroundFeature').innerHTML ="<strong>Feature: </strong>" + data.feature.name
        document.getElementById('backgroundFeatureDesc').innerHTML ="<strong>Feature Description: </strong>" + data.feature.desc
        // document.getElementById('backgroundProf').textContent += data.starting_proficiencies.forEach(obj => {
        //     const li = document.createElement('li')
        //     li.textContent = obj.name
        //     document.querySelector('ul').appendChild(li)
        // })
        })
}












