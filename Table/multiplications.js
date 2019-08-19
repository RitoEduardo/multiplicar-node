const fs = require('fs');
const colors = require('colors');

fnCreateFile = (base) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject("Base Not Number " + base);
            return;
        }

        const path = `./Files/Table-${base}.txt`;
        let data = "";
        for (let i = 1; i < 10; i++)
            data += ` ${base} X ${i} = ${base*i} \n`;

        fs.writeFile(path, data, function(err) {
            if (err) reject(err)
            resolve(path);
        });
    });
};

fnListTable = (base) => {

    if (!Number(base)) {
        console.log(colors.red("Base Not Number " + base));
        return;
    }

    for (let i = 1; i < 10; i++)
        console.log(colors.green(` ${base} X ${i} = ${base*i}`));

}

module.exports = {
    fnCreateFile,
    fnListTable
}