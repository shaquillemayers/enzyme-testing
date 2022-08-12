import { saveComment } from "actions";
import { SAVE_COMMENT } from "actions/types";

describe("saveComment", () => {
  it("has a type of SAVE_COMMENT", () => {
    const action = saveComment("Test comment");

    expect(action.type).toEqual(SAVE_COMMENT);
  });

  it("Produces an action that has a payload equal to the new comment", () => {
    const action = saveComment("Test comment");

    expect(action.payload).toEqual("Test comment");
  });
});
