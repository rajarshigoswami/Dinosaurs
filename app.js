// Create Dino Constructor
function Dino(species, weight, height, diet, where, when, fact, image) {
    this.species = species;
    this.weight = weight;
    this.height = height;
    this.diet = diet;
    this.where = where;
    this.when = when;
    this.fact = fact;
    this.image = image;
}

// Create Dino Objects
const triceratops = new Dino(
    "Triceratops",
    13000,
    114,
    "herbavor",
    "North America",
    "Late Cretaceous",
    "First discovered in 1889 by Othniel Charles Marsh",
    "images/triceratops.png"
);
const tyrannosaurusRex = new Dino(
    "Tyrannosaurus Rex",
    11905,
    144,
    "carnivor",
    "North America",
    "Late Cretaceous",
    "The largest known skull measures in at 5 feet long.",
    "images/tyrannosaurus rex.png"
);
const anklyosaurus = new Dino(
    "Anklyosaurus",
    10500,
    55,
    "herbavor",
    "North America",
    "Late Cretaceous",
    "Anklyosaurus survived for approximately 135 million years.",
    "images/anklyosaurus.png"
);
const brachiosaurus = new Dino(
    "Brachiosaurus",
    70000,
    372,
    "herbavor",
    "North America",
    "Late Jurasic",
    "An asteroid was named 9954 Brachiosaurus in 1991.",
    "images/brachiosaurus.png"
);
const stegosaurus = new Dino(
    "Stegosaurus",
    11600,
    79,
    "herbavor",
    "North America, Europe, Asia",
    "Late Jurasic to Early Cretaceous",
    "The Stegosaurus had between 17 and 22 seperate places and flat spines.",
    "images/stegosaurus.png"
);
const elasmosaurus = new Dino(
    "Elasmosaurus",
    16000,
    59,
    "carnivor",
    "North America",
    "Late Cretaceous",
    "Elasmosaurus was a marine reptile first discovered in Kansas.",
    "images/elasmosaurus.png"
);
const pteranodon = new Dino(
    "Pteranodon",
    44,
    20,
    "carnivor",
    "North America",
    "Late Cretaceous",
    "Actually a flying reptile, the Pteranodon is not a dinosaur.",
    "images/pteranodon.png"
);
const pigeon = new Dino(
    "Pigeon",
    0.5,
    9,
    "herbavor",
    "World Wide",
    "Holocene",
    "All birds are living dinosaurs.",
    "images/pigeon.png"
);
// Create Human Object
let human;

// Use IIFE to get human data from form

// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches.
compareHeight = (dino) => {
    if (dino.species !== human.species) {
        if (human.height > dino.height) {
            dino.fact = dino.fact + `, ${human.species} is taller than ${dino.species}`;
        } else {
            dino.fact = dino.fact + `, ${human.species} is shorter than ${dino.species}`;
        }
    }
};

// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.
compareWeight = (dino) => {
    if (dino.species !== human.species) {
        if (human.weight > dino.weight) {
            dino.fact = dino.fact + `, ${human.species} is heavier than ${dino.species}`;
        } else {
            dino.fact = dino.fact + `, ${human.species} is lighter than ${dino.species}`;
        }
    }
};

// Create Dino Compare Method 3
compareDiet = (dino) => {
    if (dino.species !== human.species) {
        if (human.diet === dino.diet) {
            dino.fact = dino.fact + `, ${human.species}'s diet is same as ${dino.species}`;
        } else {
            dino.fact = dino.fact + `, ${human.species}'s diet is different from ${dino.species}`;
        }
    }
};
// NOTE: Weight in JSON file is in lbs, height in inches.

generateList = () => {
    return [
        human,
        triceratops,
        tyrannosaurusRex,
        anklyosaurus,
        brachiosaurus,
        stegosaurus,
        elasmosaurus,
        pteranodon,
        pigeon,
    ];
};
// Generate Tiles for each Dino in Array
generateHTML = () => {
    const animalList = generateList();
    return animalList
        .map((animal) => {
            compareHeight(animal);
            compareWeight(animal);
            compareDiet(animal);
            return `
                <div class="grid-item">
                    <h3>${animal.species}</h3>
                    <img src="${animal.image}" />
                    <p> 
                        ${animal.fact}
                    </p>
                </div>
                `;
        })
        .join("");
};
// Add tiles to DOM

addToDom = () => {
    document.getElementById("grid").innerHTML = generateHTML();
};

// Remove form from screen
hideForm = () => {
    document.getElementById("dino-compare").style.display = "none";
};

// On button click, prepare and display infographic
document.getElementById("btn").onclick = () => {
    human = new Dino(
        document.getElementById("name").value,
        document.getElementById("weight").value,
        document.getElementById("feet").value * 12 + document.getElementById("inches").value,
        document.getElementById("diet").value,
        "",
        "",
        "",
        "./images/human.png"
    );
    hideForm();
    addToDom();
};
