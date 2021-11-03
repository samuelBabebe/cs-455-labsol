function isPrime(num){
    return new Promise((resolve,reject)=>{
       for(let i = 2, s = Math.sqrt(num); i <= s; i++){
                if(num % i === 0){
                 reject({
                     prime:false
                 });
                }
             }
            resolve({
                prime:true
            })
        
        
    })
}
// isPrime(9).then((result)=>console.log(result))
//  .catch(result =>console.log(result))
console.log('start');
isPrime(7)
    .then(res => console.log(res))
    .catch(err => console.error(err));
console.log('end');