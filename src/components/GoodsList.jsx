import { GoodsItem } from "./GoodsItem";
import { useContext } from "react";
import { ShopContext } from "../context";

const GoodsList = () => {
  const {goods, orders} = useContext(ShopContext)

  if (!goods.length) {
    return <h3>Nothing items</h3>;
  }
  const filteringGoods = goods.filter(
    (el) => el.granted[0].images?.full_background
  );

  return (
    <div className="goods">
      {filteringGoods.map((item) => (
        <GoodsItem
          key={item.id}
          {...item}
          orders={orders}
        />
      ))}
    </div>
  );
};

export { GoodsList };
