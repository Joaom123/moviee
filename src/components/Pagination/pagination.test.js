import React from "react";
import {cleanup, render} from "@testing-library/react";
import Pagination from "./index";

afterEach(cleanup);

describe("Pagination", () => {
    it("snapshot when total results equals 0", function () {
        const {asFragment} = render(<Pagination totalResults={0}/>);
        expect(asFragment()).toMatchSnapshot();
    });

    it("snapshot when total results > 0", function () {
        const {asFragment} = render(<Pagination totalResults={340}/>);
        expect(asFragment()).toMatchSnapshot();
    });
});