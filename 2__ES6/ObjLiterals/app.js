var name = 'JS';
var price = 1000;

var course = {
    name,
    price,
    getName() {
        return name;
    }
}

console.log(course.getName());


const fieldName = 'new-name';
const fieldPrice = 'price';

const course2 = {
    [fieldName] : 'javascript',
    [fieldPrice] : 1000
}

console.log(course2);