import { storybookContainer } from "../../.storybook/utility";
import { genres } from "../data";
import GenreSelect from "./GenreSelect";

export default {
  title: "Genre Select",
  component: GenreSelect,
  tags: ["autodocs"],
};

export const Primary = {
  render: storybookContainer(<GenreSelect />),
  args: {
    genres: genres,
    selectedGenre: genres[0],
    onSelect: () => {},
  },
};
