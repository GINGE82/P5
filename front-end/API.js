//Création d'une fonction pour récupérer l'API

let getCameras = function(){
    return new Promise ((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200){
                resolve(JSON.parse(this.responseText));
            }else if(this.readyState == 4 && this.status != 200){
                reject(this.responseText);
            }
        }
        request.open("GET","http://localhost:3000/api/cameras");
        request.send();
    });
}






