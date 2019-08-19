/******* Ejercio 1.1 *****/

let a = "Irónicamente";
let b = "renacimiento";

replaceAccents = function(cadena) {
    var chars = {
        "á": "a",
        "é": "e",
        "í": "i",
        "ó": "o",
        "ú": "u",
        "à": "a",
        "è": "e",
        "ì": "i",
        "ò": "o",
        "ù": "u",
    }
    var expr = /[áàéèíìóòúùñ]/ig;
    var res = cadena.replace(expr, function(e) { return chars[e] });
    return res;
}

isAnagram = function(a, b) {
    a = replaceAccents(a.toLowerCase());
    b = replaceAccents(b.toLowerCase());
    let arrA = Array.from(a);
    let arrB = Array.from(b);
    arrA.forEach(elementA => {
        let match = arrB.find(elementB => elementB == elementA);
        if (match) {
            let pos = arrB.indexOf(match);
            arrB.splice(pos, 1);
        }
    });
    return arrB.length == 0 ? true : false
}

console.log(isAnagram(a, b));

/******* Ejercio 3.1 *****/

const TOTAL_LEVELS = 100;
const MAX_LEVEL_BREAK = 8;

var contEgg = 0;
//Esta función es la única parte dónde se determina si se rompio o no,
//Por lo tanto las veces que entre a esta función son los huevos utilizados
fnThrowEgg = function(origin, breakEgg) {
    contEgg++;
    console.log(origin, origin > breakEgg ? "SI" : "NO");
    if (origin > breakEgg) { //b) el huevo se destruyó
        return true;
    } //a) el huevo sobrevivió la caída
    return false;
}

fnEvaluateFinish = function(breakResponse, origin, breakEgg) {

    if (breakResponse) { //Se había rompido con anterioridad
        origin = origin - 1;
        if (fnThrowEgg(origin, breakEgg)) {
            origin = origin - 1;
            //Confirmamos que sea el número
            if (fnThrowEgg(origin, breakEgg)) {
                origin = origin - 1;
            }
        }
    } else { //No se había rompio anteriormente
        origin = origin + 1;
        if (fnThrowEgg(breakEgg, origin)) {
            origin = origin + 1;
        } else if (fnThrowEgg(origin, breakEgg)) {
            origin = origin - 1;
        }
    }
    return origin;
}

fnEggBreaker = function(origin, breakEggLevel, levels) {

    level = Math.floor(levels / 2);
    nextLevel = Math.floor(level / 2);
    let response;

    let _break = false;

    if (fnThrowEgg(origin, breakEggLevel)) { //Se rompio
        origin = origin - nextLevel;
        _break = true;
    } else { //No se rompio
        origin = origin + nextLevel;
    }

    if (nextLevel > 0) { //El máximo de niveles son 7
        response = fnEggBreaker(origin, breakEggLevel, level, _break)
    } else {
        response = fnEvaluateFinish(_break, origin, breakEggLevel, contEgg)
    }

    return response;

}

const response = fnEggBreaker(Math.floor(TOTAL_LEVELS / 2), MAX_LEVEL_BREAK, TOTAL_LEVELS);

console.log(` La altura máxima es " ${ response } " y se utilizarón : ${ contEgg } huevos`);

/******* Ejercio 3.2 *****/
var BILL = 36;

const TICKETs = [500, 200, 100, 50, 20, 10, 5, 2, 1];
let newChangeMoney = [];
let remaining = BILL;
let count = 0;

do {
    let totalCoins = 0;
    if (remaining / TICKETs[count] >= 1) {
        totalCoins = Math.floor(remaining / TICKETs[count]);
        remaining = remaining - (totalCoins * TICKETs[count]);
    }
    count++;
    newChangeMoney.push(totalCoins)

} while (count < TICKETs.length);

let msg = "";
newChangeMoney.forEach((item, i) => {
    if (item > 0) {
        msg += `${ item } ${ item == 1 ? "moneda" : "monedas" } $${ TICKETs[i] }, `;
    }
});

console.log(msg);