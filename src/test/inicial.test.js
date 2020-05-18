import React from "react";
import Inicial from "../pages/Inicial/Inicial";
import { render, cleanup } from "@testing-library/react";

afterEach(cleanup)

it('snapshot página inicial, sem dados', () => {
    const {asFragment} = render(<Inicial/>);

    expect(asFragment(<Inicial/>)).toMatchSnapshot();
});

//Snapshot com mock

