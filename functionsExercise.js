// 1 
function fozzieBear() {
    console.log(`Wocka Wocka!`);
}
fozzieBear();

console.log("========");
// 2
function beaker(speak){
    console.log(`${speak}`);
    console.log(`${speak}`);
    console.log(`${speak}`);
    console.log(`${speak}`);
}
beaker(`Meep`)

console.log("========");

// 3 
function werewolf(a, b) {
    if (a === `Muppet` && b === `Show`) {
        console.log("It's time to play the music. It's time to light the lights.");
    }
}
werewolf(`Muppet`, `Show`);

console.log("========");

// 4
function kermit() {
    return `Kermit The Frog`
}
console.log(kermit());

console.log("========");

// 5 
// function muppetShowSeasons(seasons) {
//     if (seasons === "5") {
//         return "true"
//     } else (seasons !== "5") {
//         return "false"
//     }
// }
// muppetShowSeasons();

console.log("========");

// 6a

const muppets = [
    "Kermit The Frog", 
    "Miss Piggy", 
    "Fozzie Bear", 
    "The Great Gonzo"]

// 6b

function showMuppets(names) {
    console.log ("Kermit The Frog");
    console.log ("Miss Piggy");
    console.log("Fozzie Bear");
    console.log("The Great Gonzo");
}
showMuppets(muppets);

// 7 

const manOrMuppet = function(){
    console.log("Am I a man or am I a Muppet?");
  }
  manOrMuppet();

// 8

let rainbowConnection = () => ("Someday we'll find it. The Rainbow Connection. The lovers, the dreamers and me")
console.log(rainbowConnection);

rainbowConnection();

// 9 
// No

// 10
// Yes

// 11a

const newMuppetMovies [
    "The Muppets",
    "Muppets Most Wanted"
];

// 11b

function upperCased(n) {
    newMuppetMovies.map ()
}

// const upperCased = newMuppetMovies.map(newMuppetMovies => newMuppetMovies.toUpperCase());

console.log(uppercased);

// 12a

const oldMuppetMovies = [
    "The Muppet Movie",
    "The Muppets Take Manhattan",
    "The Great Muppet Caper", 
    "The Muppet Christmas Carol",
    "Muppet Treasure Island",
    "Muppets From Space"
]

// 12b

function findMovies(movie) {
    return movie === "The Great Muppet Caper" || movie === "Muppet Treasure Island"
}

const twoMovies = oldMuppetMovies.filter(findMovies);
console.log(twoMovies);