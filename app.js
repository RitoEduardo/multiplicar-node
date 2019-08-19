/*
let name = "Rito Eduardo"

console.log(` Hola ${ name }`)

msg = (param) => ` Hola ${ param } desde arrow function`;

let greet = msg(name);

console.log(greet);
*/
/*
class Stack {

    constructor() {
        this.stack = {};
        this.count = 0;
    }

    push(item) {
        this.stack[this.count] = item;
        this.count++;
        return this.stack;
    }

    pop() {
        this.count--;
        const element = this.stack[this.count];
        delete this.stack[this.count];
        return element;
    }

    peek() { return this.stack[this.count - 1]; }

    size() { return this.count; }

    print() { console.log(this.stack); }

}
*/
/*
const stack = new Stack();

console.log(stack.size());
stack.push(5);
stack.push(7);
stack.push(8);
stack.print();
console.log(stack.size());
console.log(stack.pop());
console.log(stack.peek());
stack.print();
*/
/*
var test = (...args) => args;
console.info(test('foo', 'bar'));

var avg = (...values) =>
    values.reduce((x, y) => x + y) / values.length;

var avgArr = arr => arr.reduce((x, y) => x + y) / arr.length;

console.log(avg(7, 8, 5, 6));
console.log(avgArr([7, 8, 9, 10]));
*/
/*
var elementos = [
    "Hidrógeno",
    "Helio",
    "Litio",
    "Beril­io"
];

let a = 5;

myFn = () => {
    let a = 10;
    return ({ a: a })
};


console.log(` la fn : ${ myFn().a } , global : ${a}`);

return;
*/

let obj = {
    fist_name: "Juan",
    last_name: "Lopez",
    power: "Multi-task",
    getFullName: function() {
        return `${ this.fist_name } ${ this.last_name }`
    }
}

let names = ["Juan", "Pedro", "Luis", "Miguel"];
let surNames = ["García", "Marquez", "Sanchez", "Salazar"];

let employes = [{
        id: 1,
        userId: 1,
        salary: 350.00
    },
    {
        id: 2,
        userId: 2,
        salary: 850.00
    },
    {
        id: 3,
        userId: 3,
        salary: 550.00
    }
]

let { fist_name: name, power } = obj
//console.log(` El usuario ${ name } tiene el poder de ${ power }`);

const getUserById = (id) => {
    let user = {
        id,
        ...obj
    }
    const index = id - 1;
    if (names[index] && surNames[index]) {
        user.fist_name = names[index];
        user.last_name = surNames[index];
    }
    //delete user.getFullName;
    return new Promise((resolve, reject) => {
        resolve(user);
    });
}

const getEmployed = (user) => {
    return new Promise((resolve, reject) => {
        const employed = employes.find(item => item.userId === user.id);
        if (employed) {
            resolve(employed);
        }
        reject("sin salario");
    });
}

const getEmployedAsync = async(user) => {
    employed = await employes.find(item => item.userId === user.id);
    if (!employed) {
        throw new Error("Sin salario en async");
    }
    return employed;
}

let id = 3;
print(2);


getUserById(id).then(user => {
    return getEmployed(user).then(resp => {
        console.log(` El empleado ${user.getFullName()} tien un salario de : ${resp.salary}`);
    });
}).catch((err) => {
    console.log(`No se encontro empleado porque ${ err }`);
});

async function print(id) {
    try {
        user = await getUserById(id);
        employed = await getEmployedAsync(user);
        console.log(` El empleado ${user.getFullName()} tien un salario de : ${employed.salary}`);
    } catch (e) {
        console.log(e)
    }
}



return;

let array = [7, 8, 9, 10];

let resp = (x) => {
    let r = array.find(i => i == x);
    console.log(r);
}

resp(8);

console.log(elementos.map((item) => item.length));
console.log(Array.isArray(elementos.map(({ length }) => length)));

var adder = {
    base: 1,

    add: function(a) {
        var f = v => v + this.base;
        return f(a);
    },

    addThruCall: function(a) {
        //Esto no funciona con CALL
        //var f = v => v + this.base;
        var f = function(v) {
            return (v + this.base);
        };
        var b = {
            base: 5
        };

        return f.call(b, a);
    }
};

console.log(adder.add(2));
console.log(adder.addThruCall(2));