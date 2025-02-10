//complete this code
class Animal {
    constructor(species) {
        this.species = species;
    }

    get speciesName() {
        return this.species;
    }

    makeSound() {
        console.log(`The ${this.species} makes a sound`);
    }
}

class Cat extends Animal {
    constructor() {
        super('Cat');
    }

    purr() {
        console.log('purr');
    }
}

class Dog extends Animal {
    constructor() {
        super('Dog');
    }

    bark() {
        console.log('woof');
    }
}

document.getElementById('create-animal-button').addEventListener('click', function() {
    const animal = new Animal('Lion');
    animal.makeSound();
});

document.getElementById('create-cat-button').addEventListener('click', function() {
    const cat = new Cat();
    cat.makeSound();
    cat.purr();
});

document.getElementById('create-dog-button').addEventListener('click', function() {
    const dog = new Dog();
    dog.makeSound();
    dog.bark();
});