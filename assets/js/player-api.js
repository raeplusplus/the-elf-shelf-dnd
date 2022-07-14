document.getElementById('raceButton').addEventListener('click', getRace)

function getRace(){
    const raceChoice = document.getElementById('raceInput').value.toLowerCase().split(" ").join("-")
    const url = `https://www.dnd5eapi.co/api/races/${raceChoice}`
        
    
    fetch(url)
        .then(res => res.json())
        .then(data => {
        
        console.log(data)

        document.getElementById('raceName').innerHTML = "<strong>Race: </strong>" + data.name
        document.getElementById('raceAlign').innerHTML = "<strong>Alignment: </strong>" + data.alignment
        document.getElementById('raceAge').innerHTML = "<strong>Age: </strong>" + data.age
        document.getElementById('raceLang').innerHTML = "<strong>Language(s): </strong>" + data.language_desc
        document.getElementById('raceSize').innerHTML = "<strong>Size: </strong>" + data.size_description   
        })
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
        })
}












