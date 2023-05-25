import { storybookContainer } from "../../.storybook/utility";
import SortControl, { sortOptions } from "./SortControl";

export default {
  title: "Sort Control",
  component: SortControl,
  tags: ["autodocs"],
  argTypes: {
    initSort: {
      options: sortOptions,
      control: "radio",
    },
  },
};

export const Primary = {
  render: storybookContainer(<SortControl />),
  args: {
    initSort: sortOptions[0],
    onSortSelect: () => {},
  },
};
