function add(value){
  let sum=0;
  for( let i=0;i<value.length;i++){
      const sumValue=value[i];
      sum=sum+sumValue;
      // console.log(i,sumValue,sum);
  }
  return sum
}
function getOddNumbersArray(number){
  let oddNumberArray=[];
  for(let i=0;i<number.length;i++){
     const index=number[i];
     
     if(index %2 !==0){
      console.log(i,index);
      oddNumberArray.push(index)
     }
  }
   return oddNumberArray
}

const array=[1,2,4,7,8,9,22];
const oddNumbersArray=getOddNumbersArray(array);
// console.log(oddNumbersArray);
const mySum=add(array)
// console.log(mySum);
const oddNumberAdd=add(oddNumbersArray)
console.log(oddNumberAdd);