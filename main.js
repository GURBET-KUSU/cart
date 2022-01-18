let carts = document.querySelectorAll('.add-cart');

let products = [
{
    name: 'grey-t-shirt',
    tag: 'greytshirt',
    price: 15,
    inCart: 0
},
{
    name: 'Green Hoodie',
    tag: 'greenhoodie',
    price: 20,
    inCart: 0
},
{
    name: 'Black Tshirt',
    tag: 'blacktshirt',
    price: 15,
    inCart: 0
},
{
    name: 'Black Hoodie',
    tag: 'blackhoodie',
    price: 20,
    inCart: 0
},

]

for(let i=0; i < carts.length;i++){
    carts[i].addEventListener('click',() => {
        cartNumbers(products[i]);
        totalCost(products[i])
})

}
function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');
    
    if(productNumbers){
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(product){
    console.log('The product clicked is', product);
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);
if(productNumbers ) {
    localStorage.setItem('cartNumbers', productNumbers + 1);
    document.querySelector('.cart span').textContent= productNumbers + 1;

} else{
    localStorage.setItem('cartNumbers', 1);
    document.querySelector('.cart span').textContent =  1;
}
setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem('productInCart');
    cartItems = JSON.parse(cartItems);
    // console.log("My cartItems are", cartItems);
    


    if(cartItems != null) {

        if(cartItems[product.tag] == undefined) {
cartItems = {

    ...cartItems,
    [product.tag]:product
    }
        
    }
    cartItems[product.tag].inCart+= 1
}
    else {
        product.inCart = 1;
        cartItems = {
               [product.tag]: product
           }
    }

   

    
    localStorage.setItem('productInCart', JSON.stringify (cartItems)); // regarder une video
}

function totalCost(product){
    //console.log('The product price is', product.price);
    let cartCost = localStorage.getItem('totalCost');
    
    console.log("My cartCost is", cartCost);
    console.log(typeof cartCost );

if(cartCost != null){
    cartCost = parseInt(cartCost)
    localStorage.setItem("totalCost" , cartCost + product.price);
}else{
    localStorage.setItem("totalCost" , product.price);  
}


}

onLoadCartNumbers();