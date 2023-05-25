import { useState } from "react";
import "./SortControl.scss";
import Menu from "../Menu/Menu";
import PropTypes from "prop-types";

export const sortOptions = ["release date", "title"];

export default function SortControl({
  initSort = sortOptions[0],
  onSortSelect,
}) {
  const [currentSort, setCurrentSort] = useState(initSort);

  return (
    <div className="row montserrat-font search-control align-items-center">
      <div className="col-auto o-60 color-white text-uppercase search-control__label">
        Sort by
      </div>
      <div className="col">
        <Menu
          menuButtonName={currentSort}
          menuButtonClasses="text-uppercase"
          menuItemClasses="text-uppercase"
          menuActions={sortOptions}
          hideArrow={false}
          onItemSelect={(item) => {
            setCurrentSort(item);
            onSortSelect(item);
          }}
        ></Menu>
      </div>
    </div>
  );
}

SortControl.propTypes = {
  /**
   * Pre-selected value to sort
   */
  initSort: PropTypes.oneOf(sortOptions),

  /**
   * on sort changed handler
   */
  onSortSelect: PropTypes.func.isRequired,
};
