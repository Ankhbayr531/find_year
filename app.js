function hello(name, age){
    console.log("Hello "+name);
    console.log("Your age is " + age);
}
plus(13, 12);
hello("Anya", 12);
hello("Anu", 17);
// argument/parametr -> func-iin zaaval avah utga
// NaN -> not a number
function kappa(){
    var age1 = prompt();
    var age2 = 2024-age1 ;
    console.log("Your birth year :"+(2024-age1));
    alert(age2);
}
function plus(num, num1){
    console.log(num+num1);
}
console.log(document);
// DOM -> html deerh buh code
var h1 = document.getElementsByTagName('h1')[0];
console.log(h1);

// variableName.style.styleName="value";
h1.style.color="blue";

// varName.innerText="value";
h1.innerText="Hello mi amigo";
function change_text(){
    h1.style.color="red";
    h1.innerText="Tu puta";
}
var h2 = document.getElementsByTagName('h2')[0];
function changeText(){
    h2.style.color="gray";
    h2.innerText="Hi my friend";
}
var input =document.getElementsByTagName('input')[0];
var p =document.getElementsByTagName('p')[0];
var i =document.getElementsByTagName('i')[0];
var i1=document.getElementsByTagName('i')[1];
var i2=document.getElementsByTagName('i')[2];
function find(){
    var c = parseInt(input.value)+10;
    console.log(c);
    var b =2024-input.value;
    p.innerText="Your birth year :"+b;
    if( input.value >= 18){
        i.innerText="Ta nasand hursen bn";
    }else if( 0 < input.value < 18){
        i.innerText="Ta nasand hureegui bn";
    }
    if( input.value > 130 ){
        i1.innerText="Hun iim naslah bolomjgui";
        i1.style.color="red";
    }else if(input.value > 0){
        i1.innerText="";
    }else{
        i1.innerText="Ta turuugui bn";
        i1.style.color="yellow";
    }
    i2.innerText="10 jiliin daraa ta iim nastai bn :"+c;
    if( input.value == "" ){
        alert("Nas oruulnuu");
    }
}
var h3 = document.getElementsByTagName('h2')[2];
function one(){
    
}
function two(){

}
function three(){

}