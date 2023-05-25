import { storybookContainer } from "../../.storybook/utility";
import MovieTile from "./MovieTile";

export default {
  title: "Movie Tile",
  component: MovieTile,
  tags: ["autodocs"],
};

export const Primary = {
  render: storybookContainer(<MovieTile />),
  args: {
    imgSrc:
      "https://s3-alpha-sig.figma.com/img/89fa/22b0/9af0f226591250d0c0dc45e952d8c0a6?Expires=1685923200&Signature=YXmqp4bkiUyY~5W9MAYz3RBhkT8497bf89RSK7sfWd~wPMjN83HLp-kTZlWw9G9DtAOpxrFu--yHn-OTnx~ZKLz8WWgtyfZFIS4GCzcfIN4v5zT91WOb45pNx-yJxMalBgfwgeJDkOnc70n0PUzjOozQkWhJBe~pmtBqeTX1qROISerLA6ElDMsUyR03DxAECQyhd9EkshWe-LiWqsWxCGz74N8osp5DLlEl1QeV4zIeHloQeCkzBgMFha3NCgNriLOOABxRRrf5t8iB67XMlLz3Ip3oKcJUaXqvSnAwvvbVN4NAyPZKD-YapabNe492jbBN~3mzJCFEqnj7yGb-XQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "Pulp fiction",
    year: 1994,
    genres: "Action & Adventure",
  },
};
