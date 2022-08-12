// One li per comment
// Renders list passed via props

import React from "react";
import { mount } from "enzyme";

import CommentList from "components/CommentList";
import Root from "Root";

describe("<CommentList />", () => {
  let wrapper;

  beforeEach(() => {
    const initialSate = {
      comments: ["Comment 1", "Comment 2"],
    };

    wrapper = mount(
      <Root initialSate={initialSate}>
        <CommentList />
      </Root>
    );
  });

  it("creates one <li> per comment", () => {
    expect(wrapper.find("li").length).toEqual(2);
  });

  it("shows the text for each comment", () => {
    expect(wrapper.render().text()).toContain("Comment 1");
    expect(wrapper.render().text()).toContain("Comment 2");
  });
});
