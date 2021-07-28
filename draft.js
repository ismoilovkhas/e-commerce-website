
///////////////////////render products on page function
var products = [
  {
    id: 101,
    img: "101.jpeg",
    name: "International Front Lid 4 Wheeled Carry-On",
    price: 595,
    quantity: 1
  },
  {
    id: 102,
    img: "102.jpeg",
    name: "International Carry-On",
    price: 750,
    quantity: 1
  },
  {
    id: 103,
    img: "103.jpeg",
    name: "Oxford Compact Carry-On",
    price: 595,
    quantity: 1
  },
  {
    id: 104,
    img: "104.jpeg",
    name: "Large Split 2 Wheeled Duffel",
    price: 895,
    quantity: 1
  },
  {
    id: 105,
    img: "105.jpeg",
    name: "TUMI Brief Pack",
    price: 525,
    quantity: 1
  },
  {
    id: 106,
    img: "106.jpeg",
    name: "Kelley Sling",
    price: 275,
    quantity: 1
  }
]


function renderboxx() {
  for (let y = 0; y < products.length; y++) {
    const element = products[y];
  var ull = document.getElementById('products_catalogue_box')
  let lii= document.createElement('ul');
  lii.className= "product_box"
  
  lii.innerHTML = `
        
  <li class="artikul">${element.id}</li>
  <li > <img src= ${element.img} width="500" height="500" class= "product_image_zoom"> </li>
    <li>${element.name}</li>
    <li>${element.price}   $</li>
    <li class="get_id"><button class="c cursor">PLACE IN CART</button></li>
  
  
  `;
  ull.appendChild(lii);
}


}
renderboxx()
/////////////////////////render shopping cart function
var shopping_cart=[]
  
let ul4 = document.getElementById('my_cart')
function render_cart() {

  for (let index = 0; index < shopping_cart.length; index++) {
    let in_cart_item = shopping_cart[index];
  
  let row=document.createElement('tr')
  
      ul4.appendChild(row);
    row.innerHTML = `
    <tr class="cart_row">
    <th class="cart_item"> ${in_cart_item.id}</th>
      <th> <img src= ${in_cart_item.img} width="100" height="100" class= "product_image_zoom"></th>
      <th>${in_cart_item.name}</th>
      <th class="unit_price">${in_cart_item.price} $</th>
      <th><button type="button" class="cart_btn_plus">+</button></th>
       <th class="cart_item_quantity">${in_cart_item.quantity}</th>
       <th><button type="button" class="cart_btn_minus">-</button></th>
       <th class="subtotal_result">${subtotal=in_cart_item.price* in_cart_item.quantity } </th>
     </tr>
      `
       
  }
  

//   let roww= document.createElement('tr')
//   ul4.appendChild(roww);
//   roww.innerHTML= `<tr id="my_cart_bottom">
//   <th></th>
//   <th>YOUR TOTAL AMOUNT IS </th>
//   <th></th>
//   <th></th>
//   <th></th>
//   <th></th>
//   <th></th>
//   <th id="total_result"> $</th>
// </tr>`


}
///////////////////////////////////add to cart function              hurrahhhh!!!
var pressherebtn= document.getElementsByClassName('c')
var erased_cart_innnerhtml= ` <tr id="my_cart_head">
<th>ID</th>
<th></th>
<th>PRODUCT NAME</th>
<th><div></div>PRICE</th>
<th></th>
<th>QUANTITY</th>
<th></th>
<th>SUBTOTAL</th>
</tr>`

for (let i = 0; i < pressherebtn.length; i++) {
  const el = pressherebtn[i].addEventListener('click', add_to_cart)
  function add_to_cart() {

    let item_from_base= products[i]
    let obj= shopping_cart.find(o => o.id == item_from_base.id)
    var cart_add_btn= document.getElementsByClassName('cart_btn_plus')
    var cart_item_quantity_btn= document.getElementsByClassName('cart_item_quantity')
    if (obj==undefined) {
      shopping_cart.push(item_from_base)
      ul4.innerHTML=erased_cart_innnerhtml

  render_cart()
    
hmmm()
plus_btn_function()

minus_btn_function()

    } else {
      objIndex = shopping_cart.findIndex((ob => ob.id == item_from_base.id));
      shopping_cart[objIndex].quantity =  shopping_cart[objIndex].quantity+1
      ul4.innerHTML=erased_cart_innnerhtml

  render_cart()
    
hmmm()
    plus_btn_function()
    
    minus_btn_function()
    
    }

}
  }
  
  function plus_btn_function(){
   
    var cart_add_btn= document.getElementsByClassName('cart_btn_plus')
    for (let index = 0; index < cart_add_btn.length; index++) {
      var element = cart_add_btn[index].addEventListener('click', plus_btn_func)
      function plus_btn_func(){
        var id_in_cart = cart_add_btn[index].parentElement.parentElement.firstElementChild. innerHTML
      objIndex = shopping_cart.findIndex((obj => obj.id == id_in_cart));
      shopping_cart[objIndex].quantity =  shopping_cart[objIndex].quantity+1
    console.log(shopping_cart[objIndex].quantity)
    ul4.innerHTML=erased_cart_innnerhtml
    render_cart()
    hmmm()
    plus_btn_function()
    minus_btn_function()
    
      }
    }
    }

    function minus_btn_function(){
   
      var cart_add_btn= document.getElementsByClassName('cart_btn_minus')
      for (let index = 0; index < cart_add_btn.length; index++) {
        var element = cart_add_btn[index].addEventListener('click', minus_btn_func)
        function minus_btn_func(){
          var id_in_cart = cart_add_btn[index].parentElement.parentElement.firstElementChild. innerHTML
        objIndex = shopping_cart.findIndex((obj => obj.id == id_in_cart));
        
        shopping_cart[objIndex].quantity =  shopping_cart[objIndex].quantity-1
        
      if (shopping_cart[objIndex].quantity==0) {
        for( var i = 0; i < shopping_cart.length; i++){ 
    
          if ( shopping_cart[i].quantity == 0) { 
      
              shopping_cart.splice(i, 1); 
              let total_result_tag=document.getElementById ('total_result')
              total_result_tag.innerHTML="0 $"

          }
      
      }
      } 
      

      ul4.innerHTML=erased_cart_innnerhtml
      render_cart()
      hmmm()
      minus_btn_function()
      plus_btn_function()

        }
      }
      }
      
    //  let get_cart_image= document.getElementById('cart_image').addEventListener('click', display_cart)
        // function display_cart(){
        //   window.alert('hello')
        //   let get_textik= document.getElementById('my_cart')
        //  get_textik.classList.toggle("mystyle");
        // }
function hmmm() {
  let subtotal_result_tag= document.getElementsByClassName('subtotal_result')
  let total_result_tag=document.getElementById ('total_result')
  var total= 0
  for (let index = 0; index < subtotal_result_tag.length; index++) {
    let element= Number( subtotal_result_tag[index].innerHTML)
    total= total + element
    // window.alert(total)
    total_result_tag.innerHTML=total +"$"
}    
  
}  
 

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("cart_image");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}