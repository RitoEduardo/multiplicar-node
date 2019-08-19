const { fnCreateFile, fnListTable } = require('./Table/multiplications');

const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
};

//let argv = process.argv;
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Crea un archivo de la tabla de multiplicar', opts)
    .help()
    .argv;

let command = argv._[0];

switch (command) {
    case 'listar':
        fnListTable(argv.base);
        break;
    case 'crear':
        fnCreateFile(argv.base).then((result) => {
            console.log(result);
        }).catch((err) => {
            console.log(err);
        });
        break;
    default:
        console.log("Comando no reconocido");
}