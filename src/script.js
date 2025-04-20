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

    cart.push(item);
    localStorage.setItem("added-item", JSON.stringify(cart));
    console.log("Item added");
    
  });
});
