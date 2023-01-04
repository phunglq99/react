
var array = ['JS', 'PHP', 'Java'];

var [a, ...rest] = array;

console.log(a);
console.log(rest);

var course = {
    name : 'Java Script',
    price : 1000,
    children: {
        name: 'ReactJs',
        price: 2000
    },
    description : 'dsaasd'
};

var { name: parentName, price , children : {name: childrenName} , description = 'Default description'} = course;

console.log(parentName, price, childrenName, description);


function logger(...params) {
    console.log(params);
}

console.log(logger(1,2,3,4,5,6,7,8));
