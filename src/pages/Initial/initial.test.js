import React from "react";
import {render, cleanup, fireEvent} from "@testing-library/react";
import Initial from "./index";

afterEach(cleanup);

const setUp = {
    searchInputNode : () => {
        const {getByTestId} = render(<Initial />);
        return getByTestId("searchMovieInput");
    }
}

describe("initial page", () => {
    it('snapshot', () => {
        const {asFragment} = render(<Initial />);
        expect(asFragment()).toMatchSnapshot();
    });

    describe("input search", () => {
        const testSearchInputValueChange = (inputValue, expectedValue) => {
            const searchInputNode = setUp.searchInputNode();

            fireEvent.change(searchInputNode, {target: {value: inputValue}});
            expect(searchInputNode.value).toBe(expectedValue);
        }

        it('should not accept space at the beginning', function () {
            testSearchInputValueChange(" ", "");
        });

        it('should accept changing value', function () {
            testSearchInputValueChange("test test", "test test");
        });
    })
});
