import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_live_51IP4HFEXFq5ta9kVcmb8ACrpqjVGmzFBiMPeipj5vCO7ISGta344bbQIKcpZQ5AYJM8Hj75hnIhlfDBsfQTCXF2e00tdJ2Ydjl";

  const onToken = (token) => {
    console.log(token);
    alert("payment successful");
  };

  return (
    <StripeCheckout
      label="STRIPE Debit & Credit card Payments"
      name="Parker"
      currency="INR"
      billingAddress
      description={`Your total price is ${price} INR`}
      amount={priceForStripe}
      token={onToken}
      stripeKey={publishableKey}
      image="https://png.pngtree.com/png-clipart/20200224/original/pngtree-car-parking-icon-simple-style-png-image_5248684.jpg"
    />
  );
};
export default StripeButton;
