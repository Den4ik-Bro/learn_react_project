import { BasketItem } from "./BasketItem";
import { useContext } from "react";
import { ShopContext } from "../context";

const BasketList = () => {
  const {orders, handleBasketShow} = useContext(ShopContext)
  const totalPrice = orders.reduce((sum, el) => {
    return sum + el.price.finalPrice * el.quantity;
  }, 0);

  return (
    <ul className="collection basket-list">
      <li className="collection-item active">Cart</li>
      {orders.length ? (
        orders.map((el) => (
          <BasketItem
            key={el.id}
            {...el}
          />
        ))
      ) : (
        <li className="collection-item">Cart is empty</li>
      )}
      <li className="collection-item active">Total price: {totalPrice}</li>
      <li className="collection-item active">
        <button className="btn-small">Pay</button>
      </li>
      <i className="material-icons basket-close" onClick={handleBasketShow}>
        close
      </i>
    </ul>
  );
};

export { BasketList };
