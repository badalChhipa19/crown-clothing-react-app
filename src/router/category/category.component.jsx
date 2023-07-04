import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";

import ProductCard from "../../component/product-card/product-card.component";
import { CategoriesContext } from "../../context/categories.context";

import { CategoriesTitle, CategoryConatiner } from "./category.style";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <CategoriesTitle>{category.toUpperCase()}</CategoriesTitle>
      <CategoriesContext>
        {products &&
          products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </CategoriesContext>
    </>
  );
};

export default Category;
