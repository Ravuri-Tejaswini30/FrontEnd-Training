let array=[1,2,3,4,5]
// for(let i=0;i<6;i++){
//     array[i]=document.getElementById(i);

// }
console.log(array);

// 2 . UpperCase()
const names=["john","peter","alex"];
const news=names.map(n=>n.toUpperCase());
console.log(news);

//3.selected students names

const detail=[
    {id=1, name="abc"},
    {id=2, name="bcd"}
];
const res=detail.map(n1 => n1.name);
console.log(res);