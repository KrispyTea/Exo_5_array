// Exo 1
let deux = "Je suis";
let tabExo = ["I am",deux,5,4,true];
console.log(tabExo);

//Exo 2
console.log(tabExo.length);

//Exo 3
tabExo.splice(4,1);
console.log(tabExo);

//Exo 4
tabExo.splice(0,1);
console.log(tabExo);

//Exo 5
tabExo.push("Chocolat","Gateau");
console.log(tabExo);

//Exo 6
tabExo.unshift("Cake","Yoga","Incroyable");
console.log(tabExo);

//Exo 7
tabExo.reverse();
console.log(tabExo);

//Exo 8
let uno = []
uno.push("choco")
uno.push("yuka")
alert(uno)
uno.unshift("grele")
alert(uno)
uno.unshift("rell","tri","zorro")
alert(uno)
uno.splice(0,3,"Correct")
alert(uno)
uno.splice(2,2)
uno.splice(0,2)
alert(uno)
