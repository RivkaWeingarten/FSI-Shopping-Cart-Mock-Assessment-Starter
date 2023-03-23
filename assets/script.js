//The + and - buttons are clickable for the product in the cart.
// select + button
let NumberofItems=document.querySelector(".total-quantity")

//select quantity (Which is defaulted to 1)
let PlusButton=document.querySelector("#quantity-up")
console.log(PlusButton)
//create event listener
PlusButton.addEventListener('click',function(){
 let  NumberofItems= NumberofItems + 1
 console.log(NumberofItems)
})
// select - button
let MinusButton=document.querySelector("#quantity-down")
console.log(MinusButton)
//create event whisperer
//The + button for the product increases the quantity by 1.
//The - button for the product removes 1 from the quantity.
//The quantity cannot drop below 0.
//The quantity number is updated and displayed when clicking the + or - buttons.
