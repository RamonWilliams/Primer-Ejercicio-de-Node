
const URL = "http://localhost:8080/api/element";

window.onload = () =>{
    init();
} 
const init =  async () =>{
    const characters = await getCharacters();
    mappedCharacters(characters);
}

const getCharacters = async () =>{
    const api = await fetch(URL);
    const convertToJson = api.json();
    return convertToJson

}

const mappedCharacters = (characters)=>{
    characters.data.elements.map( (character) =>{
          printCharacter({
              nombre:  character.name,
              emoji: character.emoji,
              image: getImages(character.images),
              etiqueta: character.tags,
          })
    })
}

const getImages = (images) =>{
    const imageList =[];
    images.forEach((image) => {
        imageList.push(image)
    });
    return imageList;
} 

const printCharacter = (character) =>{
  const mainContainer = document.querySelector("#mainContainer");
  mainContainer.innerHTML +=`
  <div class="tarjeta">
  <div class ="image-Container"> 
  <img src =${character.image} alt=${character.name}>
  </div>  
  <div class="info">
  <h2>${character.nombre}</h2>
  <p>${character.etiqueta}</p>
  <p> ${character.emoji}</p>
  </div>
  </div>
  `
}