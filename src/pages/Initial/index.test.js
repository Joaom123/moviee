import React from "react";
import { render, cleanup } from "@testing-library/react";
import Initial from "./index";

afterEach(cleanup);

it('snapshot ', () => {
    const {asFragment} = render(<Initial />);
    expect(asFragment(<Initial />)).toMatchSnapshot();
});