import React from "react";
import {cleanup, render} from "@testing-library/react";
import SearchForm from "./index";

afterEach(cleanup);

describe("SearchForm", () => {
    it("snapshot", function () {
        const {asFragment} = render(<SearchForm />);
        expect(asFragment(<SearchForm />)).toMatchSnapshot();
    });

    it("should render search value", function () {
        const searchValue = "test";
        const {getByTestId} = render(<SearchForm handleChange={() => {}} searchValue={searchValue} />);
        expect(getByTestId("searchMovieInput").value).toBe(searchValue);
    });
});