//The + and - buttons are clickable for the product in the cart.
// select + buttond
let quantityLabel=document.querySelector(".total-quantity")

let totalPriceLabel=document.querySelector(".total-price")

console.log(quantityLabel)
console.log(totalPriceLabel)

//select quantity (Which is defaulted to 1)
let NumberofItems=1
let totalPrice=15
let PlusButton=document.querySelector("#quantity-up")
console.log(PlusButton)
//create event listener
PlusButton.addEventListener('click',function(){
NumberofItems= NumberofItems +1 
totalPrice=NumberofItems * 15
 console.log(NumberofItems) 
 //change label to correct quantity
 quantityLabel.innerHTML = "Quantity: "+NumberofItems
 totalPriceLabel.innerHTML="Total Price available at checkout: $"+totalPrice

})
// select - button
let MinusButton=document.querySelector("#quantity-down")
console.log(MinusButton)
//create event listener
MinusButton.addEventListener('click',function(){
   
           NumberofItems= NumberofItems -1 
            totalPrice=NumberofItems * 15
          //if less than 0 add 1 to make 0
           if(NumberofItems<0){
            NumberofItems=NumberofItems+1
            totalPrice=totalPrice+15
           }
            quantityLabel.innerHTML = "Quantity: "+NumberofItems
            totalPriceLabel.innerHTML="Total Price available at checkout: $"+totalPrice
})

//The + button for the product increases the quantity by 1.
//The - button for the product removes 1 from the quantity.
//The quantity cannot drop below 0.
//The quantity number is updated and displayed when clicking the + or - buttons.

