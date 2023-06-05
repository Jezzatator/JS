const str = "le code c'est super !";
let counter = 0; // stocke le nombre de e

// début de votre code

for (i = 0; i <= str.length; i++) {
    if (str[i] == "e") {
        counter += 1
    }
}

// fin de votre code

console.log(counter);