import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { MemoryRouter } from "react-router-dom";
import TestUtils from "react-dom/test-utils";

import { describe, it, expect } from "../../tester/runner";

Enzyme.configure({ adapter: new Adapter() });

// https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/testing.md
// https://github.com/CompuIves/codesandbox-client/issues/364
// https://stackoverflow.com/questions/44979735/how-does-one-access-state-on-a-nested-react-component-wrapped-by-an-hoc/47318973#47318973

const Detail = require("../src/pages/DetailBook").default;

describe("Detail", () => {
  it("starts with zero commits", () => {
    const rendered = shallow(
      <MemoryRouter>
        <Detail match={{ params: { repo: "" } }} />
      </MemoryRouter>
    );
    expect(
      rendered
        .find(Detail)
        .dive()
        .instance().state.commits.length
    ).toEqual(0);
  });

  it("shows commit view by default", () => {
    const rendered = shallow(
      <MemoryRouter>
        <Detail match={{ params: { repo: "" } }} />
      </MemoryRouter>
    );
    expect(
      rendered
        .find(Detail)
        .dive()
        .instance().state.view
    ).toEqual("commits");
  });

  it("shows forks when the button is tapped", () => {
    const rendered = shallow(
      <MemoryRouter>
        <Detail match={{ params: { repo: "" } }} />
      </MemoryRouter>
    );

    const testDetail = rendered.find(Detail).dive();
    testDetail
      .find("button")
      .at(1)
      .simulate("click");

    expect(testDetail.instance().state.view).toEqual("forks");
  });

  // it("fetches forks from GitHub", () => {
  //   const rendered = shallow(
  //     <MemoryRouter>
  //       <Detail match={{ params: { repo: "" } }} />
  //     </MemoryRouter>
  //   );

  //   waitsFor(
  //     () => {
  //       console.log("In waitFor: " + rendered.state.forks.length);
  //       return rendered.state.forks.length > 0;
  //     },
  //     "commits to be set",
  //     2000
  //   );

  //   runs(() => {
  //     expect(rendered.state.forks.length).toEqual(30);
  //   });
  //});
});
