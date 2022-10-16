//object literal {}
let petSalon = {
    //attributes
    name: "Pet Salon",
    Phone: "850",
    address:{
        country:"USA",
        city:"SAN DIEGO",
        street:"MARLBOROUGH",
        zip:"92105",
    },
    pets:[]
        
}
console.log(petSalon)
let count = 0;
//       these are the arguments (local variables)
                //CONSTRUCTOR
function Pet(name, age, gender, breed, color, service, owner, phone, payment){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.color=color;
    this.service=service;
    this.ownerName=owner;
    this.contactPhone=phone;
    this.payment=payment
    this.id=count++;
}
// create a new pet 

// push the pet into the array

let inputName=document.getElementById("txtName");
let inputAge=document.getElementById("txtAge");
let inputGender=document.getElementById("txtGender"); 
let inputBreed=document.getElementById("txtBreed");
let inputColor=document.getElementById("txtColor");
let inputService=document.getElementById("txtService");
let inputOwner=document.getElementById("txtOwner");
let inputMobile=document.getElementById("txtMobile");
let inputPayment=document.getElementById("txtPayment");

function isValid(newPet){
    let valid=true;
    if(newPet.service==""){
         valid=false;
    }
    return valid;
}

function register(){
    console.log(inputName.value,inputAge.value, inputGender.value,inputBreed.value, inputService.value, inputOwner.value, inputMobile.value, inputPayment.value);

// create the object
    let thePet = new Pet(inputName.value, inputAge.value, inputGender.value, inputBreed.value,inputColor.value, inputService.value, inputOwner.value,inputMobile.value,inputPayment.value);

    if(isValid(thePet)==true){
        console.log(thePet);
//push the object into the array
    petSalon.pets.push(thePet);
    clearInputs();
    displayNumberOfPets();
    displayPetCards();
    displayPetTable();
    } else{ 
        alert("Enter a service");
}
//display the object in the console
}

function clearInputs(){
    inputName.value = "";
    inputAge.value = "";
    inputGender.value = ""; 
    inputBreed.value = "";
    inputColor.value = "";
    inputService.value = "";
    inputOwner.value = "";
    inputMobile.value = "";
    inputPayment.value = "";
}
function displayNumberOfPets(){
    document.getElementById("numberOfPets").innerHTML="We Have " + petSalon.pets.length  +" Pets Registered";
}
   //an argument withing a function parenthesis () can be replaced by whatever value the function is trying to affect
function deletePet(petID){
    console.log("Deleting a pet ... " + petID);
    // this is how the function indentifies which index to remove
    let deleteIndex;
    for(let i = 0; i < petSalon.pets.length; i++) {
        let aPet = petSalon.pets[i];
        if(aPet.id==petID){
        deleteIndex = i;
    console.log("The deleted pet is in the position" + deleteIndex); 
        }
    }
    petSalon.pets.splice(deleteIndex, 1); // splice removes an index from the array
    document.getElementById(petID).remove(); //removes an item from visual HTML
    displayNumberOfPets();
    displayPetTable();
}

function init(){
    let cat = new Pet("Jiraiya",67,"Male","Dane","Brown","Grooming","cats",850);
    let turtle = new Pet("Naruto",12,"Male","Fire","Green","Scaling","Ninja-turtle",763);
    let ostrich = new Pet("Pain",3, "Male","Bengal","Orange","Grooming","ostrich-ch",763); 
    petSalon.pets.push(jiraiya, Naruto, Pain);
    displayNumberOfPets();
    displayPetCards();
    displayPetTable();
}
window.onload = init;
//start point; stopping conditon ; increment
// length return the number of elements in the array



