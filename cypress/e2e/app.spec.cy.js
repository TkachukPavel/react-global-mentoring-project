import { genres } from "../../src/data";

describe("template spec", () => {
  const $ = cy.byId;

  beforeEach(() => {
    cy.visit("http://localhost:3000");
    const alertShown = cy.stub().as("alertShown");
    cy.on("window:alert", alertShown);
  });

  describe("Counter", () => {
    it("displays init value", () => {
      $("val").should("contain.text", 42);
    });

    it("increment value on inc-button click", () => {
      $("val").should("contain.text", 42);

      $("inc-button").click();

      $("val").should("contain.text", 43);
    });
    it("decrement value on dec-button click", () => {
      $("val").should("contain.text", 42);

      $("dec-button").click();

      $("val").should("contain.text", 41);
    });
  });

  describe("Search", () => {
    it("should prefill input with init value", () => {
      $("search-input").should("have.value", "B Movie");
    });

    it("should clear input value on search click", () => {
      $("search-input").should("have.value", "B Movie");

      $("search").click();
      cy.get("@alertShown").should("have.been.calledOnceWith", "B Movie");
      $("search-input").should("have.value", "");
    });

    it("should clear input value on input enter press", () => {
      $("search-input").should("have.value", "B Movie");

      $("search-input").type("{enter}");
      cy.get("@alertShown").should("have.been.calledOnceWith", "B Movie");
      $("search-input").should("have.value", "");
    });
  });

  describe("Genre select", () => {
    it("should display all genres", () => {
      genres.forEach((genre) => {
        $(genre).should("be.visible");
      });

      $(genres[0]).should("have.class", "active");
    });

    it("should update selected genres on genre click", () => {
      $(genres[1]).click();

      $(genres[0]).should("not.have.class", "active");
      $(genres[1]).should("have.class", "active");
      cy.get("@alertShown").should(
        "have.been.calledOnceWith",
        `${genres[1]} selected!`
      );
    });
  });
});
