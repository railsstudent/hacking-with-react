import React from "react";
import { MemoryRouter } from "react-router-dom";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { describe, it, expect } from "../../tester/runner";

Enzyme.configure({ adapter: new Adapter() });

const List = require("../src/pages/List").default;

// https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/testing.md
describe("List", () => {
  it("renders three repo links", () => {
    // const rendered = TestUtils.renderIntoDocument(
    //   <MemoryRouter>
    //     <List />
    //   </MemoryRouter>
    // );
    // const repos = TestUtils.scryRenderedDOMComponentsWithTag(rendered, "li");
    const rendered = shallow(
      <MemoryRouter>
        <List />
      </MemoryRouter>
    );
    const repos = rendered
      .find(List)
      .dive()
      .find("li");
    expect(repos.length).toEqual(3);
  });
});
