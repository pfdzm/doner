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
    default:
      return { ...state };
  }
};

const DonateProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    isVisible: false
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useDonateContext = () => {
  return useContext(DonateContext);
};

export { useDonateContext, DonateProvider };
