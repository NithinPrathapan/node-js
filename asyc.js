const person = {
  name: "nithin",
  age: "25",
  greet: () => {
    return this.name;
  },
};

console.log(person.greet());
