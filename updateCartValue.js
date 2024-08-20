const cartValue = document.querySelector("#inCart");

export const updateCartValue = (cartProducts) => {
  return (cartValue.innerHTML = `${cartProducts.length}`);
};
