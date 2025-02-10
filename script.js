class Animal {
    constructor(species) {
        this._species = species;
    }

    get species() {
        return this._species;
    }

    makeSound() {
        console.log(`The ${this.species} makes a sound`);
    }
}

class Cat extends Animal {
    constructor(species) {
        super(species);
    }

    purr() {
        console.log('purr');
    }
}

class Dog extends Animal {
    constructor(species) {
        super(species);
    }

    bark() {
        console.log('woof');
    }
}

document.getElementById('create-cat-button').addEventListener('click', function() {
    const cat = new Cat('Siamese');
    cat.makeSound();
    cat.purr();
});

document.getElementById('create-dog-button').addEventListener('click', function() {
    const dog = new Dog('Golden Retriever');
    dog.makeSound();
    dog.bark();
});