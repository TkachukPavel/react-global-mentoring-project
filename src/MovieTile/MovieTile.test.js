import { render } from "@testing-library/react";
import { $ } from "../test-utils";
import { default as user } from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import MovieTile, { movieTileActions } from "./MovieTile";

describe("Movie Tile", () => {
  const movieMock = {
    imgSrc: "imgSrc",
    title: "title",
    genres: "genres",
    year: 2007,
  };
  test("it renders component", () => {
    render(<MovieTile {...movieMock} onItemSelect={jest.fn()} />);

    expect($("poster")).toHaveAttribute("src", movieMock.imgSrc);
    expect($("poster")).toHaveAttribute("alt", movieMock.title);
    expect($("title")).toHaveTextContent(movieMock.title);
    expect($("genres")).toHaveTextContent(movieMock.genres);
    expect($("year")).toHaveTextContent(movieMock.year);
  });

  test("menu button displays only on tile hover", () => {
    render(<MovieTile {...movieMock} onItemSelect={jest.fn()} />);

    // expect($("menu-button")).not.toBeInTheDocument();

    act(() => {
      user.hover($("poster"));
    });

    expect($("menu-button")).toBeVisible();
  });

  test("user can edit movie", () => {
    const onItemSelectSpy = jest.fn();
    render(<MovieTile {...movieMock} onItemSelect={onItemSelectSpy} />);

    act(() => {
      user.hover($("poster"));
      user.click($("menu-button"));
      user.click($(movieTileActions[0]));
    });

    expect(onItemSelectSpy).toHaveBeenCalledWith(
      movieMock.title,
      movieTileActions[0]
    );
  });
});
