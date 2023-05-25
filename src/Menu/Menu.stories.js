import { useState } from "react";
import { storybookContainer } from "../../.storybook/utility";
import Menu from "./Menu";

export default {
  title: "Menu",
  componet: Menu,
  tags: ["autodocs"],
};

export const Primary = {
  render: storybookContainer(<Menu />),
  args: {
    menuButtonName: "menu button",
    menuActions: ["action 1", "action 2"],
    onItemSelect: () => {},
  },
};

const sortControlMenuItems = ["release date", "title"];

function SortMenuWrapper(props) {
  const [buttonName, setButtonName] = useState(props.menuButtonName);

  return (
    <Menu
      key={buttonName}
      {...props}
      menuButtonName={buttonName}
      onItemSelect={setButtonName}
    />
  );
}

export const SortMenu = {
  render: storybookContainer(<SortMenuWrapper />),
  args: {
    menuButtonName: sortControlMenuItems[0],
    menuButtonClasses: "text-uppercase",
    hideArrow: false,
    menuActions: sortControlMenuItems,
    menuItemClasses: "text-uppercase",
  },
};

const movieTileMenuItems = ["edit", "delete"];
const squareClass = `
.square-button {
  width: 36px;
  height: 36px;
}
`;

export const MovieTileMenu = {
  render: (args) => (
    <>
      <style>{squareClass}</style>
      {storybookContainer(<Menu />)(args)}
    </>
  ),
  args: {
    hideArrow: true,
    menuButtonName: <i className="bi bi-three-dots-vertical m-auto"></i>,
    menuButtonClasses: "bg-color-gray-1 rounded-circle p-0 square-button",
    menuItemClasses: "text-capitalize",
    menuActions: movieTileMenuItems,
    onItemSelect: () => {},
  },
};
