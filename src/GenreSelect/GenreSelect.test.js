import { render } from "@testing-library/react";
import GenreSelect from "./GenreSelect";
import { $ } from "../test-utils";
import { default as user } from "@testing-library/user-event";
import { genres } from "../data";
import { act } from "react-dom/test-utils";

describe("GenreSelect", () => {
  test("it display genres", () => {
    render(
      <GenreSelect
        genres={genres}
        selectedGenre={genres[0]}
        onSelect={() => {}}
      />
    );

    genres.forEach((genre) => {
      expect($(genre)).toBeInTheDocument();
    });

    expect($(genres[0])).toHaveClass("active");
  });

  test("user can select genre", () => {
    const onSelectSpy = jest.fn();
    render(
      <GenreSelect
        genres={genres}
        selectedGenre={genres[0]}
        onSelect={onSelectSpy}
      />
    );

    act(() => {
      user.click($(genres[1]));
    });

    expect(onSelectSpy).toHaveBeenCalledWith(genres[1]);
    expect($(genres[1])).toHaveClass("active");
    expect($(genres[0])).not.toHaveClass("active");
  });
});
