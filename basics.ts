function add(n1: number,n2: number, showResult: boolean, phrash: string){

    const result = n1 + n2;
    if(showResult){
        console.log(phrash + result);
    }else{
        return result;
    }
}

let number1: number; // 5.0
number1 = 5;
const number2 = 2.8;
const printResult = true;
let resultPhrase = 'Result is: ';

add(number1, number2, printResult, resultPhrase);