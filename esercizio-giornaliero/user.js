class User{
    constructor(firstName, lastName, age, location){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }
    compareAge(otherUser) {
        if (this.age > otherUser.age) {
            return `${this.firstName} è più vecchio di ${otherUser.firstName}`;
        } else if (this.age < otherUser.age) {
            return `${this.firstName} è più giovane di ${otherUser.firstName}`;
        } else {
            return `${this.firstName} ha la stessa età di ${otherUser.firstName}`;
        }
    }
}

const x = new User("Daniele", "De Rossi", 39, "Roma")
console.log(x);

const y = new User("Francesco", "Totti", 46, "Roma")
console.log(y);

console.log(x.compareAge(y));
console.log(y.compareAge(x));





