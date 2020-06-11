import React from "react";
import {render, cleanup} from "@testing-library/react";
import Movies from "./index";

afterEach(cleanup);

it('snapshot movies', () => {
    const {asFragment} = render(<Movies />);
    expect(asFragment(<Movies />)).toMatchSnapshot();
});

