let shoppingCart =function (){
    let basket =[]
    return{
        upsertItem(item){
            let indexs;
            let compare;
            basket.map((val,index)=>{
               if( val.id===item.id){
                compare=val;
                indexs=index;
               }
               })
            
            if(!compare){
                basket.push(item)
            }else{
               basket[indexs]=item
            }
        },
        getItemsCount(){
            return basket.length
        },
        getTotalPrice(){
            let total=0;
           basket.map((val)=>{
               total+=((val.product.price)*(val.count))
               
           })
           return total
        },
        removeItemById(id){
            let indexs;
            basket.map((val,index)=>{
                if(val.id===id){
                    indexs=index;
                }
            })
            basket.splice(indexs,1)
        }

    }
}()
const item1 = { id: 0, product: { id: 1, name: 'Coffee', description: 'Coffee Grounds from Ethiopia', price: 9 }, count: 1 }
const item2 = { id: 1, product: { id: 2, name: 'Tea', description: 'Oonlong Tea from China', price: 10 }, count: 5 }
const item3 = { id: 2, product: { id: 3, name: 'Bottled Water', description: 'Bottled Water from US', price: 2 }, count: 30 }
shoppingCart.upsertItem(item1);
shoppingCart.upsertItem(item2);
shoppingCart.upsertItem(item3);
console.log(shoppingCart.getTotalPrice()); //Expected Result: 119
item3.product.name = 'Himilayan Water';
item3.product.price = 10;
shoppingCart.upsertItem(item3);

console.log(shoppingCart.getItemsCount()); //Expected Result: 3
console.log(shoppingCart.getTotalPrice()); //Expected Result: 359
shoppingCart.removeItemById(1);
console.log(shoppingCart.getItemsCount()); //Expected Result: 2
console.log(shoppingCart.getTotalPrice()); //Expected Result: 309