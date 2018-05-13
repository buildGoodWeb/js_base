function Product(name, price) {
  this.name = name;
  this.price = price;
  if(price < 0) {
    throw RangeError(
      `Cannot create product ${this.name} with a negative price.`
    );
  }
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}

console.log(new Food('cheese', 5).name);
// => 'cheese'

// 等同于
function Food1(name, price) {
  this.name = name;
  this.price = price;
  if (price < 0) {
    throw RangeError(
      `Cannot create product ${this.name} with a negative price.`
    );
  }
  this.category = 'food';
}