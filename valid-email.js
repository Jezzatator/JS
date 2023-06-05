const email = "dorothy@mail.com";
let valid = false

// début de votre code

for (i = 0; i <= email.length; i++) {
    if (email[i] == "@") {
        valid = true
        break;
    }
}

// fin de votre code

console.log(valid);