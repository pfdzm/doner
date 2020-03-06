/**
 * Use the CSS tab above to style your Element's container.
 */
import React from "react";
import { CardElement } from "@stripe/react-stripe-js";
import "./style.css";

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "#32325d",
      fontSmoothing: "antialiased",
      fontSize: "18px",
      "::placeholder": {
        color: "#aab7c4"
      }
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a"
    }
  }
};

function CardSection() {
  return (
    <div>
      <label className="text-gray-700 font-bold mb-3 pt-3 text-lg">
        Card details
        <CardElement className="mb-3" options={CARD_ELEMENT_OPTIONS} />
      </label>
    </div>
  );
}

export default CardSection;
