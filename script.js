// new Character("{charName}", "Kafka's Partner", "kafkaspartner.html#{id}")
// Curly brackets replaced with the thingy

const charactersOnPage = [new Character("Castorice", "Blade's Partner", "bladespartner.html#currentMain"), new Character("The Herta","Blade's Partner","bladespartner.html#favHerta"),  new Character("Serval","Blade's Partner","bladespartner.html#favBelobog"), new Character("Blade","Blade's Partner","bladespartner.html#favXianzhou"), new Character("Sunday","Blade's Partner","bladespartner.html#favPenacony"), new Character("Aglaea","Blade's Partner","bladespartner.html#favAmphoreus"), new Character("Mortenax Blade","Blade's Partner","bladespartner.html#favPlanarcadia"), new Character("Blade","Blade's Partner","bladespartner.html#favStellaron"), new Character("Boothill","Blade's Partner","bladespartner.html#favGalaxyRanger"), new Character("Stelle","Blade's Partner","bladespartner.html#favAstralExpress"),  new Character("1.6","Blade's Partner","bladespartner.html#versionJoined"), new Character("Amphoreus","Blade's Partner","bladespartner.html#favPlanet"), new Character("3.3","Blade's Partner","bladespartner.html#favQuest"), new Character("3.5 Trailer","Blade's Partner","bladespartner.html#favTrailer"), new Character("Proi Proi","Blade's Partner","bladespartner.html#favBossSong"),new Character("Aglaea","Blade's Partner","bladespartner.html#favCharacterTrailer"), new Character("Nameless Faces","Blade's Partner","bladespartner.html#favOST"), new Character("Evernight", "Kafka's Partner", "kafkaspartner.html#myMain"), new Character("Arlan", "Kafka's Partner", "kafkaspartner.html#mySpaceStation"), new Character("Serval", "Kafka's Partner", "kafkaspartner.html#myBelobog"), new Character("Jingliu", "Kafka's Partner", "kafkaspartner.html#myLuofu"), new Character("Gallagher", "Kafka's Partner", "kafkaspartner.html#myPenacony"), new Character("Cyrene", "Kafka's Partner", "kafkaspartner.html#myAmphoreus"), new Character("Silver Wolf", "Kafka's Partner", "kafkaspartner.html#myPlanar"), new Character("Kafka", "Kafka's Partner", "kafkaspartner.html#myStellaron"), new Character("Rappa", "Kafka's Partner", "kafkaspartner.html#myGalaxy"), new Character("Dan Heng", "Kafka's Partner", "kafkaspartner.html#myAstral"), new Character("Version 1.0", "Kafka's Partner", "kafkaspartner.html#myVersion"), new Character("Belobog", "Kafka's Partner", "kafkaspartner.html#myPlanet"), new Character("Roads to the Past Have Long Been Closed", "Kafka's Partner", "kafkaspartner.html#myQuest"), new Character("Dan Heng Trailer", "Kafka's Partner", "kafkaspartner.html#myTrailer") ]
console.log(charactersOnPage)

function Character(name, person, uri) {
  // Defines a CLASS
  this.name = name;
  this.person = person;
  this.uri = uri;
};

function addToList(input) {
  // adds obect to the search list
  const node = document.createElement("li");
  const linknode = document.createElement('a');
  const newDiv = document.createElement("div")
  newDiv.className = "character"
  linknode.href = input.uri;
  linknode.textContent = input.name + " "  + "(" + input.person + ")";
  node.appendChild(linknode);
  newDiv.appendChild(node)
  document.getElementById("mainText").appendChild(newDiv)
  
}

function search(searchInput) {
  removePageContents()
  console.log(searchInput)
  let counter = 0
  searchInput = searchInput.toLowerCase();
  searchInput = searchInput.trim();
  
  charactersOnPage.sort((a,b) => a.name.localeCompare(b.name))
  
  for (character of charactersOnPage) {
    if (character.name.toLowerCase().includes(searchInput)) {
      addToList(character);
      counter++;
    };
  };
  
  if (counter == 0) {
    const node = document.createElement("li");
    node.innerHTML = `<b> ${searchInput} </b> not found`
    document.getElementById("mainText").appendChild(node)
  }
};

function removePageContents() {
  // removes contents <p>
  document.getElementById("mainText").innerHTML = ""
}