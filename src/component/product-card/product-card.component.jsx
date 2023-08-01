import { useDispatch } from "react-redux";

import { addItemToCart } from "../../store/cart/cart.reducer";
import {
  ProductCardContainer,
  Image,
  Footer,
  Name,
  Price,
  ButtonEl,
} from "./product-card.styles.jsx";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { imageUrl, name, price } = product;

  const addToCart = () => dispatch(addItemToCart(product));
  return (
    <ProductCardContainer>
      <Image src={imageUrl} alt={name} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <ButtonEl buttonType="inverted" onClick={addToCart}>
        ADD TO CART
      </ButtonEl>
    </ProductCardContainer>
  );
};

export default ProductCard;
