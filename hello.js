

const sayHello = function(name){
  console.log('Hello, world ' + name);
};

sayHello('Laura');
sayHello('Paco');
sayHello('Louis');

const returnSayHello = function(name){
  return 'Hello, ' + name;
}

const greeting = returnSayHello('Hugo');
console.log(greeting);