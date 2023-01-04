// Nối
var arr1 = ['Reat', 'Java'];
var arr2 = ['PHP', 'C'];

var arr3 = [...arr1, ...arr2];

console.log(arr3);

var obj1 = {
    name: 'Reat',
};

var obj2 = {
    price: 1000
};

var obj3 = {
    ...obj1,
    ...obj2,
};

console.log(obj3);

//Tạo mới và override

var defaultConfig = {
    api: 'http://domain-trang-khoa-hoc',
    apiVersion: 'v1'
};

var exerciseConfig = {
    ...defaultConfig,
    api: 'http://domain-trang-bai-tap',
};

console.log(exerciseConfig);


var array = ['JS', 'PHP', 'Ruby'];

function loog(...rest) {
    for (var i = 0; i < rest.length; i ++) {
        console.log(rest[i]);
    }
}

loog(...array);