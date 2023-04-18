//Object

let person = {
    name: 'Twumasi',
    age: 51
};
//Dot notation
person.name

//Bracket notation
person['age']
console.log(person.age);

//Array
let Selcolors = ['Blue', 'White'];
Selcolors[2] = 2;
console.log(Selcolors.length);
console.log(Selcolors);

//function a task
function la() {
    console.log('Hello World');
}
la();

//function with parameter performing a  task
function la(age, namee) {
    console.log('Hello World' + ' ' + age + ' ' + namee);
}
la('40', 'Boadi');

// calc a value
function sq(number) {
    return number * number;
}
let number = 5;
console.log(sq(6));

//arithmetic operations
let num1 = 19;
let num2 = 4;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 / num2);
console.log(num1 * num2);
console.log(num1 ** num2);
console.log(num1 % num2);
console.log(num1++);
console.log(num2--);
console.log(++num1);
console.log(--num2);

//comparison operator = true & false
//relational operators
let comp1 = 5;
console.log(comp1 > 0);
console.log(comp1 < 0);
console.log(comp1 >= 0);
console.log(comp1 <= 0);
console.log(comp1 == 0);
console.log(comp1 != 0);
//strict equality operator same type and value
console.log(1 === 1);
console.log('1' === 1);

//lose equality same value
console.log(1 == 1);
console.log('1' == 1);

//ternary operators
// if a customer has more than 100 points they are gold operators
// others they are silver operators
let point = 105;
let type = point > 100 ? 'Gold Customer' : 'Silver';
console.log(type);

//Logical AND (&&)
//it returns true if both operands are true
let gih = true;
let gif = true;

let fig = gif && gih;
console.log('picture format', fig);
//logical OR (||)
//it returns true if one operand is true
let gihf = true;
let gift = true;

let figt = gift && gihf;
console.log('picture format', figt);
//NOT(!);
let pdff = !gift;
console.log('not picture format', pdff);
//logical operators
let usercol = 'Green';
let defacol = 'White';

let choscol = usercol || defacol;
console.log(choscol);

//Bitwise operators
let a = 'Red';
let b = 'Green';

let c = a;
a = b;
b = c;
console.log(a);
console.log(b);
//if statement
let hour = 0;
if (hour >= 6 && hour <= 12)
    console.log('Good Morning');
else if (hour >= 12 && hour <= 18)
    console.log('Good Afternoon');
else if (hour >= 18 && hour <= 24)
    console.log('Good evening');
else
    console.log('Good Night');

//swtich & case
let role = 'Admin';
switch (role) {
    case 'guest':
        console.log('Guest User');
        break;
    case 'User 1':
        console.log('User 1');
        break;
    case 'Admin':
        console.log('Admin User');
        break;
    default:
        console.log('Unknown User');
}

//LOOPS STATEMENTS
//---- For(initialExpression; condition; incrementExpression){
// statement}
//
for (let i = 0; i <= 5; i++) {
    console.log('Hello WordPress', i);
}
// printing odd number
for (let fi = 0; fi <= 5; fi++) {
    if (fi % 2 !== 0) console.log(fi);
}
for (let ev = 0; ev <= 10; ev++) {
    if (ev % 2 == 0) console.log(ev);
}
//While loop
// initialExpression
// while(condition){
//     incrementExpression
// }
let aaa = 1;
while (aaa < 10) {
    if (aaa % 2 == 0) console.log(aaa);
    aaa++;
}
//Do-while loop
let r = 0;
do {
    if (r % 2 !== 0) console.log(r);
    r++;
} while (r < 12);

//For in loop = use to iterate over properties of an object.
const py = {
    ename: 'Akwasi',
    eage: 44
};
for (let key in py) console.log(key, py[key]);

//for-of loop = use to iterate over elements of an object/array.
const colla = ['blue', 'green', 'yellow'];
for (let cols of colla) console.log(cols);

//break and continue
let faa = 0;
while (faa <= 6) {
    if (faa === 3) break;
    console.log(faa);
    faa++;
}
//max of two numbers
function max(max1, max2) {
    if (max1 > max2) return max1;
    return max2;

}
console.log(max(180, 150));

function landscape(width, height) {
    return (width > height);
}
console.log(landscape(180, 700));

//FIZZBUSS algorithm
//divisible by 3 =Fizz
//divisible by 5 =Buzz
//divisible by 3 and 5 = FizzBuzz

const output = fizzBuzz(5);
console.log(output);
function fizzBuzz(input) {
    if (typeof input != "number")
        return NaN;
    if (input % 3 === 0 && input % 5 === 0)
        return "FizzBuzz";
    if (input % 3 === 0)
        return "Fizz";
    if (input % 5 === 0)
        return "Buzz";
    return input;
}
//speed work to check limit below 70 and above to suspend lincense

function checkspeed(speed) {
    const speedlimit = 70;
    const pint = 5;
    if (speed <= speedlimit + pint) {
        console.log('Ok');
        return;
    }
    const poi = Math.floor((speed - speedlimit) / pint);
    if (poi >= 12)
        console.log('Lincense Suspended');
    else
        console.log('Point = ', poi);

}
checkspeed(100);

//Print out odd and even numbers
shownum(12);
function shownum(limit) {
    for (let i = 0; i <= limit; i++) {
        if (i % 2 == 0) {
            console.log(i, 'EVEN NUMBER');
        }
        else{
            console.log(i,'ODD NUMBER');
        }
    }
}
