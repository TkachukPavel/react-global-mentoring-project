import { render } from "@testing-library/react";
import { $ } from "../test-utils";
import MovieDetails from "./MovieDetails";
describe("Movie Details", () => {
  test("it renders component with correct data", () => {
    const movieMock = {
      imgSrc: "imgSrc",
      title: "Title",
      year: 2007,
      genres: "genres mock",
      description: "description",
      duration: "2h 4min",
      score: 9.1,
    };

    render(<MovieDetails {...movieMock} />);

    expect($("poster")).toHaveAttribute("src", movieMock.imgSrc);
    expect($("poster")).toHaveAttribute("alt", movieMock.title);
    expect($("title")).toHaveTextContent(movieMock.title);
    expect($("score")).toHaveTextContent(movieMock.score);
    expect($("year")).toHaveTextContent(movieMock.year);
    expect($("genres")).toHaveTextContent(movieMock.genres);
    expect($("duration")).toHaveTextContent(movieMock.duration);
    expect($("description")).toHaveTextContent(movieMock.description);
  });
});
