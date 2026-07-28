//const [value1,valu2]=array
//basic array destructuring 
const colors=["Red","Green","pink","yellow"]
const [first,second,third]=colors;
console.log("basic destructuring");
console.log(first);
console.log(second);
console.log(third);

//skip values
const array=[1,2,3,4,5];
const [first1,,third1,,fifth1]=array;
console.log("skipping values");
console.log(first1);
console.log(third1);
console.log(fifth1);

// default value
const array2=[100];
const [a1,b1=200]=array2;
console.log("default values");
console.log(a1);
console.log(b1);

// swap values
let x=10;
let y=20;
[x,y]=[y,x];
console.log("swap numbers");
console.log(x);
console.log(y);

//object destructuring 
//const {property1,property2}=object;
const employee={id:1,name:"ab",department:"IT"};
const {id,name,department}=employee;
console.log("object destructuring");
console.log(id);
console.log(name);
console.log(department);

//rename variables
const student={name:"raj",age:20};
const {name:studentName,age:studentAge}=student;
console.log("rename variables");
console.log(studentName);
console.log(studentAge);

// default values
const user={name1:"ram"};
const {name1,city="Banglore"}=user;
console.log("dafault values");
console.log(name1);
console.log(city);

//nested object destructuring
const employee={name2:"john",address:{city1:"Banglore",state1:"Karnataka"}};
const {address:{city1,state1}}=employee;
console.log("nested object destructuring");
console.log(city1);
console.log(state1);