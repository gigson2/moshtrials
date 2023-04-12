//logical operators
let usercol = 'Green';
let defacol='White';

let choscol= usercol||defacol;
console.log(choscol);

//Bitwise operators
let a = 'Red';
let b = 'Green';

let c = a;
a=b;
b=c;
console.log(a);
console.log(b);
//if statement
let hour =0;
if (hour>=6 && hour<=12) {
    console.log('Good Morning');
}
else if (hour>=12 && hour<=18) {
    console.log('Good Afternoon');
}
else if (hour>=18 && hour<=24) {
    console.log('Good evening');
}
else{
    console.log('Good Night');
}
//swtich & case
