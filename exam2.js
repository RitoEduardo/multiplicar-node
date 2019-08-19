/*

const level = 100;
let breakEgg = 27;

fnEggBreaker = function(init, origin, breakEgg, level, acarreo, last) {

    if (level === 0) { //Llegamos al nivel más bajo es decir estamos próximos a encontrar el número
        console.log("===> Finish <===");
        console.log(origin, acarreo);
        console.log(origin == breakEgg);
        return;
    }

    if (!acarreo) {
        origin = Math.floor(origin / 2);
    }

    console.log(origin, origin > breakEgg ? "SI" : "NO", "====> " + level);

    if (origin > breakEgg) { //Se reompio
        send = false;
        if (acarreo) {
            send = true;
            origin = last + Math.floor(level / 2);
            console.log("Lo que buscaba", origin);
        }
        last = origin;
        fnEggBreaker(init, origin, breakEgg, Math.floor(level / 2), send, last)
    } else {
        if (acarreo) {
            //origin = origin + Math.floor(level / 2);
            origin = origin + Math.floor((init - origin) / 2);
            console.log("Lo segudo que buscaba ", origin);
            last = origin;
            fnEggBreaker(init, origin, breakEgg, Math.floor(level / 2), true, last)
        } else {
            last = origin;
            fnEggBreaker(init, origin + Math.floor(origin / 2), breakEgg, Math.floor(level / 2), true, last)
        }

    }


}

fnEggBreaker(level, level, breakEgg, Math.floor(level / 2), false, level)
*/


const TOTAL_LEVELS = 100;

fnEvaluateFinish = function(breakResponse, origin, breakEgg, responseLast) {


    var lastOrigin = origin;
    //console.log("Función lógica finish")

    if (breakResponse) { //Se había rompido

        origin = origin - 1;
        if (origin > breakEgg) {
            origin = origin - 1;
            if (origin > breakEgg) {
                console.log(" **************** 50 *******************");
                origin = origin - 1;
            } else {
                //console.log("Confirmamos si era el número")
            }
        }

    } else { //No se había rompio

        origin = origin + 1;
        if (origin < breakEgg) {
            origin = origin + 1;
        } else {
            if (origin > breakEgg) {
                origin = origin - 1;
                //console.log("PTM ===========> ", breakEgg, lastOrigin)
            } else {
                //console.log("HDP ===========> ", breakEgg, lastOrigin)
                origin = origin;
            }
        }

    }
    if ((origin == breakEgg) == false) {
        console.log(`El ${breakEgg} número ganador es : ` + origin);
    }
    //console.log(`El ${breakEgg} número ganador es : ` + origin);
    console.log(` YOU WIN : `, (origin == breakEgg));
    return origin;

}

fnEggBreaker = function(origin, breakEgg, points, responseLast) {

    var init = TOTAL_LEVELS;
    level = Math.floor(points / 2);
    nextLevel = Math.floor(level / 2);
    if (level === 0) { //Llegamos al nivel más bajo es decir estamos próximos a encontrar el número
        console.log("===> Finish <===");
        console.log("Número no encontrado")
        return;
    }

    /*
        Level 1 ====> 50
        Level 2 ====> 25
        Level 3 ====> 13
        Level 4 ====> 6
        Level 5 ====> 3
        Level 6 ====> 1
        Level 7 ====> 0
    */
    //console.log(origin, origin > breakEgg ? "SI" : "NO", "====> " + level);

    var breakFn = false;

    if (origin > breakEgg) { //Se reompio
        breakFn = true;
        origin = origin - nextLevel;
    } else { //No se rompio
        origin = origin + nextLevel;
        breakFn = false;
    }

    if (nextLevel > 0) {
        fnEggBreaker(origin, breakEgg, level, breakFn)
    } else {
        fnEvaluateFinish(breakFn, origin, breakEgg, responseLast)
    }

}

for (let i = 0; i < 101; i++) {
    fnEggBreaker(Math.floor(TOTAL_LEVELS / 2), i, TOTAL_LEVELS);
}
//fnEggBreaker(Math.floor(TOTAL_LEVELS / 2), breakEgg, TOTAL_LEVELS, undefined);11