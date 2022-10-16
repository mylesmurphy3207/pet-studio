function displayPetCards(){
    //get the html element where we display the pets
    let petsDiv = document.getElementById("pets");
    let tmp = "" //tmp stands for  template
    //travel the pets array
    for(let i=0; i<petSalon.pets.length;i++){

        let aPet = petSalon.pets[i];
        tmp+=`
        <div id="${aPet.id}" class="pet">
            <p> Name: ${aPet.name} </p>
            <p> Age: ${aPet.age} </p>
            <p> Gender: ${aPet.gender} </p>
            <p> Breed: ${aPet.breed} </p>
            <p> Color: ${aPet.color} </p>
            <p> Service: ${aPet.service} </p>
            <p> Owner's Name: ${aPet.ownerName} </p>
            <p> Mobile: ${aPet.contactPhone} </p>
            <button onclick="deletePet(${aPet.id});" class="btn btn-danger"> Delete </button>
        </div>
            `;
    }
        // creat the template (card)
    petsDiv.innerHTML = tmp;
        //insert the card into the html element
}
function displayPetTable(){

 let pTable = document.getElementById("tablePets");
    let format = ""
        for(let i=0; i<petSalon.pets.length;i++){

            let aPet = petSalon.pets[i];
            format+=` 
            <tr id="${aPet.id}"> 
                <td> ${aPet.name}</td>
                <td> ${aPet.age}</td>
                <td> ${aPet.gender}</td>
                <td> ${aPet.breed}</td>
                <td> ${aPet.color}</td>
                <td> ${aPet.service}</td>
                <td> ${aPet.ownerName}</td>
                <td> ${aPet.contactPhone}</td>
                <td><button onclick="deletePet(${aPet.id});" class="btn btn-danger"> Delete </button></td>
            </tr>
            `;
}
    pTable.innerHTML = format;
}

