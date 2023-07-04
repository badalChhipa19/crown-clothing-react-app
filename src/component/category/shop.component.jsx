import { useContext } from "react";

import CategoryPreview from "../category-preview/category-preview.component";
import { CategoriesContext } from "../../context/categories.context";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <div className="shop-container">
      {Object.keys(categoriesMap).map((title) => (
        <CategoryPreview
          title={title}
          product={categoriesMap[title]}
          key={title}
        />
      ))}
    </div>
  );
};

export default Shop;
