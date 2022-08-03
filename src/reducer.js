export const initialState = {
  basket: [],
  favorite: [],
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "ADD_TO_FAVORITE":
      return {
        ...state,
        favorite: [...state.favorite, action.item],
      };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `cant remove product with id: {action.id} as it is not a basket`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };
    case "REMOVE_FROM_FAVORITE":
      const indexFav = state.favorite.findIndex(
        (FavItem) => FavItem.id === action.id
      );

      let newFav = [...state.favorite];

      if (indexFav >= 0) {
        newFav.splice(indexFav, 1);
      } else {
        console.warn(
          `cant remove product with id: {action.id} as it is not in favorites`
        );
      }
      return {
        ...state,
        favorite: newFav,
      };

    default:
      return state;
  }
};

export default reducer;
