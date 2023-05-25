import Counter from "./Counter";

export default {
  title: "Counter",
  component: Counter,
  tags: ["autodocs"],
};

export const Primary = {
  render: (args) => <Counter key={JSON.stringify(args)} {...args} />,
  args: {
    initValue: 0,
  },
};
