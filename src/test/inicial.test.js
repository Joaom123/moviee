import React from "react";
import Inicial from "../pages/Inicial/Inicial";
import {render, cleanup} from "@testing-library/react";

afterEach(cleanup)

it('should take a snapshot', () => {
    const {asFragment} = render(<Inicial/>);

    expect(asFragment(<Inicial/>)).toMatchSnapshot();
});

