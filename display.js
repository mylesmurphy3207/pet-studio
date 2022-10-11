function displayPetCards(){
        //get the HTML element where we display the pets
        let petsDiv = document.getElementById("pets");
        let tmp;
        for(let i=0;i<petSalon.pets.length;i++){
            let aPet = petsSalon.pets[i];
             tmp+=`
            <div class="pet">
            
                <p>Name: ${aPet.name} </p>
                <p>Age: ${aPet.age} </p>
                <p>Gender: ${aPet.gender} </p>
                <p>Breed: ${aPet.breed} </p>
                <p>Service: ${aPet.service} </p>
            </div>`;
            console.log(tmp);
        }
        
        petsDiv.innerHTML=(tmp);
}

function dissplayPetTable(){

}