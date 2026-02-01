

function sumofNumber(number){
    console.log(number);
    let sum=0;
    for(const num of number){
        console.log(num);
       sum=sum+num;
       
    }
    return sum;
}
const numbers=[1,4,6,7,3,9,35];
const total=sumofNumber(numbers);
console.log( 'sum of =',total);
