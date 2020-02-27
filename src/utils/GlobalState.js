import React, { createContext, useContext, useReducer } from "react";

const DonateContext = createContext();

const { Provider } = DonateContext;

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_NAV":
      return {
        ...state,
        isVisible: !state.isVisible
      };
    case "NEXT_CHARITY":
      const next =
        state.charities.length === state.currentCharity + 1
          ? 0
          : state.currentCharity + 1;
      return {
        ...state,
        currentCharity: next
      };
    case "PREV_CHARITY":
      const prev =
        state.currentCharity - 1 < 0
          ? state.charities.length - 1
          : state.currentCharity - 1;

      return {
        ...state,
        currentCharity: prev
      };
    case "FETCH_CHARITIES":
      return {
        ...state,
        charities: action.payload
      };
    default:
      return { ...state };
  }
};

const DonateProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    isVisible: true,
    currentCharity: 0,
    charities: []
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useDonateContext = () => {
  return useContext(DonateContext);
};

export { useDonateContext, DonateProvider };
