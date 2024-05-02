export const reducer = (state, { type, payload }) => {
  switch (type) {

    case "CLOSE_ALERT":
      return {
        ...state,
        alertName: '',
      };

    case "REMOVE_FROM_BASKET":
        console.log(payload.id)
      return {
        ...state,
        orders: state.orders.filter((el) => el.id !== payload.id),
      };

    case "ADD_TO_BAKSET": {
      const itemIndex = state.orders.findIndex(
        (orderItem) => orderItem.id === payload.id
      );
      let newOrder = null;

      if (itemIndex < 0) {
        const newItem = {
          ...payload,
          quantity: 1,
        };
        newOrder = [...state.orders, newItem];
      } else {
        newOrder = state.orders.map((orderItem, index) => {
          if (index === itemIndex) {
            return {
              ...orderItem,
              quantity: orderItem.quantity + 1,
            };
          } else {
            return orderItem;
          }
        });
      }
      return {
        ...state,
        orders: newOrder,
        alertName: payload.name
      };
    }

    case 'INCREMENT_QUANTITY': 
        return {
            ...state,
            orders: state.orders.map((el) => {
                if (el.id === payload.id) {
                    const newQuantity = el.quantity + 1;
                    return {
                        ...el,
                        quantity: newQuantity
                    }
                } else {
                    return el;
                }
            })
            
        }

    case 'DECREMENT_QUANTITY': 
        return {
            ...state,
            orders: state.orders.map((el) => {
                if (el.id === payload.id) {
                  const newQuantity = el.quantity - 1;
                  return {
                    ...el,
                    quantity: newQuantity >= 1 ? newQuantity : 1,
                  };
                } else {
                  return el;
                }
            })
        }    

    case 'TOGGLE_BASKET':
        return {
            ...state,
            isBasketShow: !state.isBasketShow,
        }
    
    case 'SET_GOODS':
        return {
            ...state,
            goods: payload || [],
            loading: false
        }
    default:
      return state;
  }
};
