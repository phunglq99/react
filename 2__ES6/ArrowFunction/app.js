// =================== Arrow functions =================

const sum = (a, b) => a + b;

const sumObj = (a, b) => ({a: a, b: b});

const course = {
    name : 'JS',
    getName: () => {
        return this; //context:
        //Arrow function không nhận được context(this) và không chạy được Constructor : undefined
    }
};

// =================== Functions constructor =================

const Course = function (name, price) {
    this.name = name;
    this.price = price;
}

const jsCourse = new Course('JS', 10);

console.log(jsCourse);

console.log(sum(2, 2));

console.log(sumObj(2, 2));

console.log(course.getName());