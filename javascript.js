class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;

        this.printdetails = function () {
            console.log(this.name, this.age);
        };
    }
}

var p = new person("srijan",20);
console.log(p);