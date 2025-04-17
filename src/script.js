const btn = document.querySelectorAll("button");

btn.forEach((element, index) => {
  btn[index].addEventListener("click", (event) => {
    event.preventDefault();
    let p = `price-${index}`;
    let price = document.getElementById(`${p}`);
    console.log(price.textContent);
  });
});
