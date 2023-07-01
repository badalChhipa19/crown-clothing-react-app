import "./button.styles.scss";

const BUTTON_TYPE_CLASS = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ Children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`${BUTTON_TYPE_CLASS[buttonType]} button-container`}
      {...otherProps}
    >
      {Children}
    </button>
  );
};

export default Button;
