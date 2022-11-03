console.log("test")

let getraenke = [
    "Coca-Cola",
    "Apfelsaft",
    "Pepsi",
    "Traubensaft",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta"
]

const getraenkeSorted = getraenke.sort();
console.log(getraenkeSorted)

function myDrinks() {
    getraenkeSorted.forEach((drink) => {
        console.log(drink);
    })

    document.write(getraenkeSorted.join("<br>"));
}

myDrinks()