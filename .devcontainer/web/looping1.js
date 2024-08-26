const myNum = [1,2,3,4,5,6,7,8,8,10] 
 //const newNUM = myNum.map( (num) => num+10)




 const newNum = myNum.map((num) => num*10)
 .map((num)=> num+10)
 .filter( (num) => num>40)
 console.log(newNum);
 

 
 