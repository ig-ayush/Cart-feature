const btn = document.querySelectorAll("button");

btn.forEach((element, index) => {
  btn[index].addEventListener("click", (event) => {
    event.preventDefault();
    let p = `price-${index}`;
    let pr_name = `pr-${index}`;
    let price = document.getElementById(`${p}`);

    let product_name = document.getElementById(pr_name).textContent ;
    let product_price = price.textContent;

    console.log(product_name, "",product_price)

    
  });
});
