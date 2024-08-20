import { addToCart } from "./addToCart";
import { quantityToggle } from "./quantityToggle";

let productContainer = document.querySelector("#productContainer");
let templateContainer = document.querySelector("#productTemplate");

export const showProductContainer = (productArr) => {
  if (!productArr) {
    return false;
  }
  productArr.forEach((element) => {
    const { id, name, category, price, image, stock, description } =
      element;

    const productClone = document.importNode(templateContainer.content, true);

    productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);

    productClone.querySelector(".productName").textContent = name;
    productClone.querySelector(".productImage").src = image;
    productClone.querySelector(".productImage").alt = name;
    productClone.querySelector(".productStock").textContent = stock;
    productClone.querySelector(".category").textContent = category;
    productClone.querySelector(".productPrice").textContent = `₹${price}`;
    productClone.querySelector(".productActualPrice").textContent = `₹${
      price * 4
    }`;
    productClone.querySelector(".productDescription").textContent = description;
    let quantity = productClone.querySelector(".productQuantity");
    productClone
      .querySelector(".stockElement")
      .addEventListener("click", (event) => {
        quantityToggle(event, id, stock);
      });
    productClone
      .querySelector(".add-to-cart-button")
      .addEventListener("click", (event) => {
        addToCart(event, id, stock);
      });

    productContainer.append(productClone);
  });
};
