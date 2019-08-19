var BILL = 145;

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

/*
const TOTAL_LEVELS = 100;
const MAX_LEVEL_BREAK = 17;

fnThrowEgg = (origin, breakEgg) => origin > breakEgg;

fnEggBreaker = function(origin, breakEgg, levels) {
    level = Math.floor(levels / 2);
    nextLevel = Math.floor(level / 2);
    let _break = false;

    if (fnThrowEgg(origin, breakEgg)) {//Se rompio
        origin = origin - nextLevel;
        _break = true;
    } else { //No se rompio
        origin = origin + nextLevel;
    }
    if (nextLevel > 0) {
        fnEggBreaker(origin, breakEgg, level, _break)
    } else {
        if (_break) {
            --origin;
            if (fnThrowEgg(origin, breakEgg)) {
                --origin;
                if (fnThrowEgg(origin, breakEgg)) {--origin }
            }
        } else {
            ++origin;
            if (fnThrowEgg(breakEgg, origin)) {
                ++origin;
            } else if (fnThrowEgg(origin, breakEgg)) {
                --origin;
            }
        }
        console.log("La altura máxima es: " + origin);
    }
}

fnEggBreaker(Math.floor(TOTAL_LEVELS / 2), MAX_LEVEL_BREAK, TOTAL_LEVELS);
*/
/*
((a, b) => {
    let arrA = Array.from(a.toLowerCase());
    let arrB = Array.from(b.toLowerCase());
    arrA.forEach(elementA => {
        let match = arrB.find(elementB => elementB == elementA);
        if (match) {
            let pos = arrB.indexOf(match);
            arrB.splice(pos, 1);
        }
    });
    return arrB.length == 0 ? true : false
})('amor', 'roma');
*/