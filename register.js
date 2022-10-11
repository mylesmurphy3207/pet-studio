//object literal
let petSalon = {
    //atributes
    name:"Pet fashion",
    phone: "333-333-333",
    address:{
        country:"USA",
        city:"san diego",
        street:"Marlborugh ave",
        number:"3829",
        Zip:"92105"
    },
    pets:[]
}



//these are the arguments
function Pet(name,age,gender,breed,service,owner,phone){
//the real attributes are the enxt:
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.ownerName=owner;
    this.contactPhone=phone
}

// create a new pet
let Jiraiya = new Pet("Jiraiya",59,"Male","Dane","Grooming","Shaggy","333-333-3333");
console.log(Jiraiya);
let Pain = new Pet("Pain",59,"Male","Dane","Grooming","Shaggy","333-333-3333");
console.log(Pain);

petSalon.pets.push(Jiraiya,Pain);
// push the pet nto the array
let inputName=document.getElementsByID("txtName");
let inputAge=document.getElementsByID("txtAge");
let inputGender=document.getElementsByID("txtGender");
let inputBreed=document.getElementsByID("txtBreed");
let inputService=document.getElementsByID("txtService");
let inputOwner=document.getElementsByID("txtOwner");
let inputContactphone=document.getElementsByID("txtContactphone");

function register(){
    let thePet = new pet(inputName.value,inputAge.value,inputGender.value,inputBreed,value,selectService.value);
    petSalon.pets.push(thePet);
    clearInputs();
    displayNumberOfPets();
    }
    
function clearInputs(){
    inputName.value="";
    inputAge.value="";
    inputGender.value="";
    inputBreed.value="";
    selectService.value="";
}
function displayNumberOfPets(){
    document.getElementById("numberOfPets").innerHTML= `We have $ {petSalon.pets.length} pets in the system.`;
}
function init(){
    //create a new pet
    let Jiraiya = new Pet("Jiraiya",59,"Male","Dane","Grooming","Shaggy","333-333-3333");
    let Pain = new Pet("Pain",59,"Male","Dane","Grooming","Shaggy","333-333-3333");
    petSalon.pets.push(Jiraiya,Pain);
    displayNumberOfPets();
}

window.onload = init;