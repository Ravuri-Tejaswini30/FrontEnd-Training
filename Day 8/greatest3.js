let num1=5;
let num2=10;
let num3=4;
if(num1>num2 && num1>num3){
    console.log(num1 +" is greater number than " + num2 +" "+num3);
}
else if(num1<num2 && num2>num3){
    console.log(num2+ " is a greater than "+num1+" "+num3);
}
else{
    console.log(num3+ " is a greater than "+num1+" "+num2);
}