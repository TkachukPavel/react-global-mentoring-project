import Search from "./Search";

export default {
  title: "Search",
  component: Search,
  tags: ["autodocs"],
};

export const Primary = {
  render: (args) => <Search key={JSON.stringify(args)} {...args} />,
  args: {
    initQuery: "B Movie",
    onSearch: () => {},
  },
};
