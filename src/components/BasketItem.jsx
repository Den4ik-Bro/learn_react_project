import { useContext } from "react";
import { ShopContext } from "../context";

const BasketItem = (props) => {
  const {incQuantity, decQuantity, removeFromBasket} = useContext(ShopContext)
  const {
    id,
    price,
    name,
    quantity,
  } = props;

  return (
    <li className="collection-item">
      {name}{" "}
      <i
        className="tiny material-icons basket-quantity"
        onClick={() => incQuantity(id)}
      >
        add_circle
      </i>{" "}
      x{quantity}{" "}
      <i
        className="tiny material-icons basket-quantity"
        onClick={() => decQuantity(id)}
      >
        remove_circle
      </i>{" "}
      = {price.finalPrice * quantity}
      <span className="secondary-content">
        <i
          className="tiny material-icons basket-delete"
          onClick={() => {
            removeFromBasket(id);
          }}
        >
          close
        </i>
      </span>
    </li>
  );
};

export { BasketItem };
