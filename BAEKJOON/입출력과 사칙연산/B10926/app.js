const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('/n');
input = input[0].trim();

solution(input)


function solution(s){
    console.log(s+"??!")
}