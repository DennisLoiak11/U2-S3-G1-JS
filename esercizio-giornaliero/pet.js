const form = document.querySelector("#form")
const lista = document.querySelector("#list")
const bottone = document.querySelector("#btn")

class Pet {
    constructor(petName, ownerName, species, breed) {
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
    }
};

const pets = []

bottone.addEventListener('click', function(){
    let petName = document.querySelector(".input-name").value;
    let ownerName = document.querySelector(".input-owner").value;
    let species = document.querySelector(".input-species").value;
    let breed = document.querySelector(".input-breed").value;

    pets.push(new Pet(petName, ownerName, species, breed));
    console.dir(pets);
    appendList(pets[pets.length-1])

    
})

function appendList(elemento){
    let li = document.createElement("li");
    let arr = Object.values(elemento)
    arr.forEach(value => {
        li.innerText = li.innerText + ' ' + value + ' ';
    });
    lista.appendChild(li);
    form.reset();
}