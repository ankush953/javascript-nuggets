const greetMe = (name) => console.log(name)

greetMe('ankush')

const greetCallback = (name, cb) => {
    name += ' singh';
    cb(name);
}

greetCallback('ankush', greetMe)