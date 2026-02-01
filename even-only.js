


function array(number){
    const even=[];
    console.log(number);
    for(num of number){
        console.log(num);
         if(num%2===0){
       even.push(num);
    }
    }
   return even;
}
const arr=[1,3,4,56,67,30];
const Jahid=array(arr);
console.log(Jahid);
  



// sum of even digit  in a many  number
console.log('Another example okay ');

function digit(num){
    console.log(num);
     let summestion=0;
    for(num of num){
        console.log(num);
        if(num%2==0){
        summestion=summestion+num;
    }
    }
  
    return summestion;
}
const  array2=[1,4,5,8,9,30,40];
const result=digit(array2);
console.log('sum of total digit=',result);