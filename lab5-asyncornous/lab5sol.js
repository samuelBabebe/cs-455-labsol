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

Array.prototype.removeDuplicatesAsync =function(){
    let oldarr = this;
    return new Promise((resolve,reject)=>{
        let arr =[]
        for(item of oldarr){
            if(arr.includes(item)){
                
            }else{
                arr.push(item)
            }
        }
       resolve(arr)
    }).then(console.log)
}
console.log("lol");
[4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].removeDuplicatesAsync()
console.log("kiya")