let name=localStorage.setItem('name','john');
console.log(name);
let name1=sessionStorage.setItem('name1','doe');
console.log(name1);

console.log(localStorage.getItem(name));
localStorage.removeItem(name);
let student={
    id:1,
    name2:'pan',
    course:'btech'
};

let data=localStorage.setItem("student",JSON.stringify(student));
console.log(data);