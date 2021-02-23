async function cameras() {
        const cameras = await getCameras();

        
//Itération des cartes
  cameras.forEach((camera) => {
//Création des éléments
        let createAllCard= document.createElement('div');
        let createCard = document.createElement('div');
        let createImg = document.createElement('img');
        let createBodyCard = document.createElement('div');
        let createTitle = document.createElement ('h5');
        let createButton = document.createElement ('a');

//Création des classes
        createAllCard.classList.add ("col");
        createCard.classList.add ("card");
        createImg.classList.add ("card-img-top");
        createBodyCard.classList.add ("card-body");
        createTitle.classList.add ("card-title");
        createButton.classList.add ("btn", "btn-primary");

        document.getElementById("products").textContent = "Nos appareils vintage";
        createImg.textContent = camera.imageUrl;
        createTitle.textContent = camera.name;
        createButton.textContent = "En savoir plus";
        
//Insertion des éléments
        products.appendChild(createAllCard);
        createAllCard.appendChild(createCard);
        createCard.appendChild(createImg);        
        createImg.appendChild(createBodyCard);        
        createBodyCard.appendChild(createTitle);           
        createTitle.appendChild(createButton);    
        });
}
