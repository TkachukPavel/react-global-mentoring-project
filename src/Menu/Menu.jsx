import { useState, useEffect } from "react";
import "./Menu.scss";
import PropTypes from "prop-types";

export default function Menu({
  menuButtonName,
  menuButtonClasses = "",
  menuItemClasses = "",
  hideArrow = false,
  menuActions,
  className = "",
  onItemSelect,
}) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hideMenu = () => setIsOpen(false);
    document.addEventListener("click", hideMenu);
    return () => document.removeEventListener("click", hideMenu);
  });

  return (
    <div
      className={`dropdown-center montserrat-font menu ${className} ${
        isOpen ? "d-block" : ""
      }`}
    >
      <button
        data-testid="menu-button"
        className={`btn dropdown-toggle bg-color-black color-white py-0 menu__button ${
          hideArrow ? "menu__button--hide-arrow" : ""
        } ${menuButtonClasses}`}
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
      >
        {menuButtonName}
      </button>

      <ul
        data-testid="menu-body"
        className={`dropdown-menu rounded-0 bg-color-black menu__list ${
          isOpen ? "show" : ""
        }`}
      >
        {menuActions.map((action) => (
          <li key={action}>
            <button
              data-testid={action}
              className={`dropdown-item color-white menu__item ${menuItemClasses}`}
              onClick={() => onItemSelect(action)}
            >
              {action}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

Menu.propTypes = {
  /**
   * element or string to be used as menu button name
   */
  menuButtonName: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  /**
   * additional button menu css classes
   */
  menuButtonClasses: PropTypes.string,
  /**
   * additiona menu item css classes
   */
  menuItemClasses: PropTypes.string,
  /**
   * hide down arrow toggle
   */
  hideArrow: PropTypes.bool,
  /**
   * list of menu items
   */
  menuActions: PropTypes.arrayOf(PropTypes.string).isRequired,
  /**
   * additional css classes to component host
   */
  className: PropTypes.string,
  /**
   * on menu item select handler
   */
  onItemSelect: PropTypes.func.isRequired,
};
