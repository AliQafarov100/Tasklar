

//5th Task
 function Num (num){
   
    let remind = num % 10;
    let newNum = num / 10;

   while(num > 10){
     remind = remind * 10;
     num /= 10;
   }
   let total = remind + newNum;
   
   return total;
}

console.log(Num(475));

//1st Task

function Reverses(){
    // let words = "Reverse";

    // for(let index = words.length; index > 0; --index){
    //     console.log(words[index - 1]);
    // }
    
    let words = ["Free","Code","Camp"];
    
    for(let index = 0; index < words.length; index++){

        for(let j = words[index].length; j > 0; j--){
            console.log(words[index].charAt(j-1));
        }
    }
    return (words.reverse().join(""));
}

console.log(Reverses());


//6th Task
// let deqree = (b,a) =>{
    
//     return Math.pow(b,a);
// }

// console.log(deqree(5,3));


// 7th Task
// const numbers = [4,9,45,25,80,90,34];

// let finds = numbers.findIndex(Numb);

// function Numb(value){
//     return value == 45;
// }

// console.log(finds);

//4th Task

// var username = prompt("Enter username please: ");
// console.log(username);
// var password = prompt("Enter password please: ");
// console.log(password);

// if(confirm(username) && confirm(password)){
//     console.log("Correct!");
// }
// else if(username == null || password == null){
//     console.log("Incorrect!");
// }

//2nd Task

class MathOperate{
  
     plus(val,b){
         return b + val;
     }

     minus(val,b){
         return val - b;
     }

     multiply(val,b){
         return val * b;
     }

     divide(val,b){
         return val / b;
     }
}

var numb = new MathOperate().plus(50,6);
var minus = new MathOperate().minus(numb,30);
var multiples = new MathOperate().multiply(minus,3);
var divides = new MathOperate().divide(multiples,2);

console.log(divides);
