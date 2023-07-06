import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

import { selectCategoriesMap } from "../../store/categories/categories.selectors";
import ProductCard from "../../component/product-card/product-card.component";

import { CategoriesTitle, CategoryConatiner } from "./category.style";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <CategoriesTitle>{category.toUpperCase()}</CategoriesTitle>
      <CategoryConatiner>
        {products &&
          products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </CategoryConatiner>
    </>
  );
};

export default Category;
