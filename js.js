/*function myFunc(a, b){
    if (!b) {
        b = 1;
    }
    return a + b;
}

myFunc(1);

console.log(myFunc(1))
_______________________*/


/*function traziNajduzuRijec(zadaniNiz){
    var najduzaRijecUFunkciji = "";
    for(let i=0; i<zadaniNiz.length; i++){
        if (zadaniNiz[i].length > najduzaRijecUFunkciji.length){
            najduzaRijecUFunkciji = zadaniNiz[i];
        }
    }
    return najduzaRijecUFunkciji;
}

var niz = ["Marko", "Ana", "Josipa", "Anamarija", "Ivo"];

var najduzeIme = traziNajduzuRijec(niz);

console.log(najduzeIme); (email.contains("@"))
_____________________________________*/


/*function checkEmail(email){
    var i = email.indexOf("@");
    console.log("search index i = " + i);
    if (i > 0){
        var tmpEmailDomain = email.substring(i+1, email.length);
        console.log(tmpEmailDomain);
        var z = tmpEmailDomain.indexOf(".");
        console.log("search index z = " + z);
        if (z > 0){
            return true;
        }
        return false;
    } else {
        return false;
    }
}

var isEmailOk = checkEmail("moje.ime@gmail.com");
console.log("email ok = " + isEmailOk);

return;
________________________________________________*/


var dog = {};
dog.breed = "Golden retriever";
dog["other breed"] = "Chihuahua";

var glavnaPasmina = dog.breed;
var podPasmina = dog["other breed"];

console.log(glavnaPasmina);
console.log(podPasmina);
