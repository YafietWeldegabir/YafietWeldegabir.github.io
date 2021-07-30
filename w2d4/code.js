String.prototype.filter = function (...bannedWords) {
    return this.replace(new RegExp(bannedWords.join("|"), "gi"), '').replace(/\s+/g, ' ').trim();
}

Array.prototype.bubbleSort = function () {
    let len = this.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (this[j] > this[j + 1]) {
                let tmp = this[j];
                this[j] = this[j + 1];
                this[j + 1] = tmp;
            }
        }
    }
    return this;
};

/*3*/
var Person = function () { };
Person.prototype.initialize = function (name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.describe = function () {
    return this.name + ", " + this.age + ", years old";
}

var Teacher = function () { };
Teacher.prototype = new Person();
Teacher.prototype.teach = function (subject) {
    console.log(this.name + " is teaching " + subject);
}

var teacher1 = new Teacher();
teacher1.initialize("Yafiet", 24);
teacher1.teach("WaP");