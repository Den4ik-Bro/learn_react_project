const BasketItem = (props) => {
  const {
    id,
    price,
    name,
    quantity,
    removeFromBasket,
    incQuantity,
    decQuantity,
  } = props;

  return (
    <li className="collection-item">
      {name}{" "}
      <i class="tiny material-icons basket-quantity" onClick={() => incQuantity(id)}>
        add_circle
      </i>{" "}
      x{quantity}{" "}
      <i class="tiny material-icons basket-quantity" onClick={() => decQuantity(id)}>
        remove_circle
      </i>{" "}
      = {price.finalPrice * quantity}
      <span class="secondary-content">
        <i
          class="tiny material-icons basket-delete"
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
