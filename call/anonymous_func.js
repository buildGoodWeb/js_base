var animals = [
  { species: 'Lion', name: 'King' },
  { species: 'Whale', name: 'Fail' }
];

for (var i = 0; i < animals.length; i++) {
  // this => animals[i]
  (function(i) {
    this.print = function() {
      console.log(`#${i} ${this.species}: ${this.name}`);
    }
    this.print();
  }).call(animals[i], i)
}

function greet() {
  var reply = [this.person, 'Is An Awesome', this.role].join(' ');
  console.log(reply);
}

var k = {
  person: 'Douglas Crockford',
  role: 'Javascript Developer',
};

greet.call(i);