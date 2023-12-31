import { useSelector } from "react-redux";

import {
  selectCartTotal,
  selectCartItems,
} from "../../store/cart/cart.selector";
import CheckoutItem from "../../component/checkout-item/checkout-item.component";

import {
  CheckoutContainer,
  CheckouHeader,
  HearderBlock,
  Total,
} from "./checkout.styles";

const CheckOut = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  // const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <CheckoutContainer>
      <CheckouHeader>
        <HearderBlock>
          <span>Product</span>
        </HearderBlock>
        <HearderBlock>
          <span>Discription</span>
        </HearderBlock>
        <HearderBlock>
          <span>Quantity</span>
        </HearderBlock>
        <HearderBlock>
          <span>Price</span>
        </HearderBlock>
        <HearderBlock>
          <span>Remove</span>
        </HearderBlock>
      </CheckouHeader>
      {cartItems.map((item) => {
        return <CheckoutItem key={item.id} CheckoutItem={item} />;
      })}
      <Total>Total: ${cartTotal}</Total>
    </CheckoutContainer>
  );
};

export default CheckOut;
