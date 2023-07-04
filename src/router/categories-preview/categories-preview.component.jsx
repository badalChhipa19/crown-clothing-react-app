import { Fragment, useContext } from "react";

import CategoryPreview from "../../component/category-preview/category-preview.component";
import { CategoriesContext } from "../../context/categories.context";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => (
        <CategoryPreview
          title={title}
          product={categoriesMap[title]}
          key={title}
        />
      ))}
    </Fragment>
  );
};

export default CategoriesPreview;
