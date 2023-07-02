import { useContext } from "react";

import ProductCard from "../../component/product-card/product-card.component";
import { ProductContext } from "../../context/products.context";

import "./shop.style.scss";

const Shop = () => {
  const product = useContext(ProductContext);
  return (
    <div className="products-container">
      {product.map((product) => {
        return <ProductCard product={product} key={product.id} />;
      })}
    </div>
  );
};

export default Shop;
