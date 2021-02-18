const addAndMultiply = (x,y,z) => (x + y) * z;
console.log(addAndMultiply(4,8,5))


const selfIntro = (name, hobby, count) => `My name is ${name}. I practice ${hobby} ${count} times a day.`;
console.log(selfIntro('Shanqyeet', 'Kendama', '18'));


let squared = (x) => x * x;
console.log(squared(2));


const prices = [1.00, 2.00, 3.00, 4.00];
const gst = 0.06;
//const pricesWithTax = prices.map(price => price + (price * gst));
const pricesWithTax = [];
prices.forEach(price => pricesWithTax.push(price + (price * gst)));
console.log(pricesWithTax);


