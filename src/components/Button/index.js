import PropTypes from "prop-types";

import "./style.scss";

export const BUTTON_TYPES = {
  DEFAULT: 1,
  SUBMIT: 2,
};

const Button = ({ title, onClick, type, disabled, children }) => {
  switch (type) {
    case BUTTON_TYPES.DEFAULT:
      return (
        <button
          className="Button"
          data-testid="button-test-id"
          onClick={onClick}
          title={title}
          disabled={disabled}

          type="button"
        >
          {children}
        </button>
      );
    case BUTTON_TYPES.SUBMIT:
      return (
        <input
          className="Button"
          data-testid="button-test-id"
          onClick={onClick}
          title={title}
          disabled={disabled}
          
          type="submit"
          value={children}
        />
      );
    default:
      return (
        <button
          type="button"
          disabled={disabled}
          className="Button"
          data-testid="button-test-id"
          onClick={onClick}
          title={title}
        >
          {children}
        </button>
      );
  }
};

// eslint-disable-next-line react/no-typos
Button.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,

  // ajout de oneOf : permet de s'assurer que la propriété type est l'une des valeurs autorisées définies dans l'énumération BUTTON_TYPES.
  type: PropTypes.oneOf([BUTTON_TYPES.DEFAULT, BUTTON_TYPES.SUBMIT]),
  disabled: PropTypes.bool,
  children: PropTypes.node,
};
Button.defaultProps = {
  disabled: false,
  onClick: () => null,
  type: BUTTON_TYPES.DEFAULT,
  title: "",
  children: null
}

export default Button;
