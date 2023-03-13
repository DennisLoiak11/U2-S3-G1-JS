class User{
    constructor(firstName, lastName, age, location){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }
}

const Utente1 = new User("Daniele", "De Rossi", 39, "Roma")
console.log(Utente1);

const Utente2 = new User("Francesco", "Totti", 46, "Roma")
console.log(Utente2);

