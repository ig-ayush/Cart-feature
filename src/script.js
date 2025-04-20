
const btn = document.querySelectorAll("button");
let cart = JSON.parse(localStorage.getItem("added-item")) || [];

btn.forEach((element, index) => {
  btn[index].addEventListener("click", (event) => {
    event.preventDefault();
    let p = `price-${index}`;
    let pr_name = `pr-${index}`;
    let price = document.getElementById(`${p}`);

    let product_name = document.getElementById(pr_name).textContent;
    let product_price = price.textContent;

    console.log(product_name, "", product_price);
    
    const item = {
      product_name,
      product_price,
    };
    
    let sameItem = cart.some((item) => item.product_name == product_name);
    
    if (sameItem) {
      alert(`you have alredy Added the ${product_name} item in cart`);
      return;
    }
    
    cart.push(item);
    localStorage.setItem("added-item", JSON.stringify(cart));
    console.log("Item added");
    
    displayItem();
  });
});

function displayItem() {
  const cartItem = document.getElementById("item");
  console.log(cartItem);
  cartItem.innerHTML = " ";
  
  cart.forEach((item, index) => {
    const list = document.createElement("li");
    list.className = "flex justify-around underline";
    
    list.innerHTML = `
    <p id="sl">${index + 1}<span>.</span></p>
      <p id="p-name">${item.product_name}</p>
      <p id="p-price">${item.product_price}</p>
      `;

    cartItem.appendChild(list);
  });
}

document.addEventListener("DOMContentLoaded", displayItem());