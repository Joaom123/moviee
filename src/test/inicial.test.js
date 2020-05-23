import React from "react";
import Index from "../pages/Inicial";
import { render, cleanup } from "@testing-library/react";

afterEach(cleanup)

it('snapshot página inicial', () => {
    const {asFragment} = render(<Index/>);

    expect(asFragment(<Index/>)).toMatchSnapshot();
});

//Snapshot com mock

