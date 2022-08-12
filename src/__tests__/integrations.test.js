import React from "react";
import { mount } from "enzyme";
import moxios from "moxios";

import Root from "Root";
import App from "components/App";

beforeEach(() => {
  moxios.install();
  moxios.stubRequest("http://jsonplaceholder.typicode.com/comments", {
    status: 200,
    response: [{ name: "Fetched #1" }, { name: "Fetched #2" }],
  });
});

afterEach(() => {
  moxios.uninstall();
});

it("can fetch a list of comments and display them", (done) => {
  // Attempt to render the entire App
  const wrapper = mount(
    <Root>
      <App />
    </Root>
  );

  // find the fetchComments button and click it
  wrapper.find(".fetch-comments").simulate("click");

  // Expect to find list of comments
  moxios.wait(() => {
    wrapper.update();

    expect(wrapper.find("li").length).toEqual(2);

    done();
    wrapper.unmount();
  });
});
