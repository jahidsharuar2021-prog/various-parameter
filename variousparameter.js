

function stringsize(str){
    const size=str.length;
    console.log(str,size);
    if(size%2===0){
        console.log('even size');
    }
    else{
        console.log('odd size');
    }

}
stringsize('Dhaka');
stringsize('Faka');


console.log('boolean expression');
function doubleorTriple(number,doduble){
    if(doduble===true){
        const result=number*2;
        return result;
    }
    else{
         const result=number*3;
        return result;
    }

}
console.log(doubleorTriple(5,true));
console.log(doubleorTriple(5,false));



console.log('using array in function');

function array(jahid){
    return jahid;
    const len=jahid.length;
    return len;
}
const arr=array([10,20,40,50,60,70]);
console.log(arr);