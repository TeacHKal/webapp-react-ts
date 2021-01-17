import React from "react";
import { render } from "@testing-library/react";
import { Selection } from "../index"

const selectionDataTest = [
    {
        text: "button text 1",
        type: "typeOne",
    },
    {
        text: "button text 2",
        type: "typeTwo",
    },
];

it("renders correctly", () => {
    const { getByText } = render(
        <Selection data={selectionDataTest} onSelectionChange={() => ("log")}/>
        );

    expect(getByText("button text 1")).toBeTruthy();
    expect(getByText("button text 2")).toBeTruthy();
});

it("render btn correctly", () => {
    const { getByText } = render(
        <Selection data={selectionDataTest} onSelectionChange={() => ("log")}/>
    );

    expect(getByText("button text 1")).toBeTruthy();
});


