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


const upperDrinks = getraenke.map((drink) => {
    return drink.toUpperCase();

})
console.log(upperDrinks)
document.getElementById("list").innerHTML = upperDrinks.join("<br>")