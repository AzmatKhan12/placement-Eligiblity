class Student {
    static count = 0;
    constructor(name, age, phone, marks) {
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.marks = marks;
        Student.recordsOfStudent();
    }
    eligibleForCollege(marks) {

        if (this.marks >= 40) {
            console.log(`${this.name} Marks is ${this.marks}  Eligible for College`);

        }
        else {
            console.log(`${this.name} Marks is ${this.marks} note Eligible for College`);

        }
    }
    static recordsOfStudent() {

        return (Student.count++)

    }
    setPlacement(minAge) {
        return (minMarks) => {
            if (this.age >= minAge && this.marks >= minMarks) {
                console.log(`${this.name} is ready for placement `)
            }
            else {
                console.log(`${this.name} is not ready for placement`)
            }
        }
    }

}


const s1 = new Student('Azmat', 27, 8184902937, 85);
const s2 = new Student('john', 25, 12334, 39);
const s3 = new Student('jill', 25, 5443, 40);
const s4 = new Student('brade', 29, 86656, 35);
const s5 = new Student('yahoo', 28, 76544, 50);
s1.eligibleForCollege();
s2.eligibleForCollege();
s3.eligibleForCollege();
s4.eligibleForCollege();
s5.eligibleForCollege();
console.log(Student.recordsOfStudent())
s1.setPlacement(18)(40)
s2.setPlacement(18)(40)
s3.setPlacement(18)(40)
s4.setPlacement(18)(40)
s5.setPlacement(18)(40)


