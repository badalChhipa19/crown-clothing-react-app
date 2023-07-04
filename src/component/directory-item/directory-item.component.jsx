import { useNavigate } from "react-router";

import {
  DirectoryItemContainer,
  BackgroundImage,
  Body,
} from "./directory-item.style";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();
  const categoryRedirectHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={categoryRedirectHandler}>
      <BackgroundImage url={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
