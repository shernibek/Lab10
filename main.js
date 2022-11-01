let lab1 = [5, 5, 5, 5, 10, 10];
let lab2 = [5, 5, 5, 5, 5, 5, 10];
let lab3 = [5, 10, 10, 15];
let lab4 = [10];
let lab5 = [5, 5, 5, 5, 5, 10, 10, 10, 10, 5];
let lab6 = [5, 5, 10, 5, 5, 10];
let lab8 = [5, 10, 10, 10, 5];
let lab = [lab1, lab2, lab3, lab4, lab5, lab6, lab8];
let quiz1 = [38];

// Using Loops and Calculating Sums of Labs

let sum1 = 0;
for (let i = 0; i < lab1.length; i++){
    sum1 += lab1[i];
}

let sum2 = 0;
for (let i = 0; i < lab2.length; i++){
    sum2 += lab2[i];
}

let sum3 = 0;
for (let i = 0; i < lab3.length; i++){
    sum3 += lab3[i];
}

let sum4 = 0;
for (let i = 0; i < lab4.length; i++){
    sum4 += lab4[i];
}

let sum5 = 0;
for (let i = 0; i < lab5.length; i++){
    sum5 += lab5[i];
}

let sum6 = 0;
for (let i = 0; i < lab6.length; i++){
    sum6 += lab6[i];
}

let sum8 = 0;
for (let i = 0; i < lab8.length; i++){
    sum8 += lab8[i];
}

console.log(sum1, sum2, sum3, sum4, sum5, sum6, sum8);

// Using functions 

function get_sum(lab) {
    let sum = 0
    for (let i = 0; i < lab.length; i++)
        {sum += lab[i]}
    return sum; }

// Main Function 

let labs_average = (sum1 + sum2 + sum3 + sum4 + sum5 + sum6 + sum8) / 7;
let total_score = 0.6 * (labs_average) + 0.4 * (quiz1);

function main (lab){
    const result = {
        lab1: lab1, // array of scores for lab1
    lab2: lab2, // array of scores for lab2
        lab3: lab3, // array of scores for lab3
    lab4: lab4, // array of scores for lab4
        lab5: lab5, // array of scores for lab5
        lab6: lab6, // array of scores for lab6
    lab8: lab8, // array of scores for lab8
        quiz1: quiz1, // score of quiz1
        sums: [sum1, sum2, sum3, sum4, sum5, sum6, sum8],  // array of sums of each lab
        total_score: total_score, // computed total score
}
return result;
}

let results = main(lab);
console.log(results)
