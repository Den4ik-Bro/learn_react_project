import { useContext } from "react";
import { ShopContext } from "../context";

const Cart = () => {
  const { handleBasketShow, orders} = useContext(ShopContext);
  const quantity = orders.length

  return (
    <div className="cart blue darken-4 white-text" onClick={handleBasketShow}>
      <i className="small material-icons">add_shopping_cart</i>
      {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
  );
};

export { Cart };
