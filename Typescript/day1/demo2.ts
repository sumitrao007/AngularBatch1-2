


Multiplication(); //function call
//function
// 1 function without parameter & without return type
// 2 function with argument & without return type
// 3 function without argument & with return type
// 4 function with argument & with return type
var a:number;

//function defination
function Multiplication(){
    console.log(`you are in Multiplication Function ${4*2}`);
}

function Mul1(a:number,b:number){
    console.log(`Mult ${a*b}`);
}

Mul1(2,2);

function mul2():number {

    return (8*8);
}

var res=mul2();
console.log(`
--------------------------------------------------
function without argument & with return type ${res}
----------------------------------------------------
`);

function mul3(a:number,b:number):number{

    return (a*b);
  // return (console.log(a*b))
}

console.log(`
---------------------------------------
function with argument & with return type ${mul3(5,5)}
------------------------------------------
`);






