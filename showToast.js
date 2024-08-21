import { getCartProductFromLS } from "./getCartProducts";

let cartProduct = getCartProductFromLS();
export function showToast(operation, id, quantity) {
  const toast = document.createElement("div");
  toast.classList.add("toast");
  
  if (operation === "add") {
    toast.textContent = `Product with ID ${id} has been added.`;
  } else if (operation === "delete") {
    toast.textContent = `Product with ID ${id} has been deleted.`;
  }
  else if (quantity == 1) {
    toast.textContent = `Product with ID ${id} already present in the cart.`;
  }
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 2000);
}
