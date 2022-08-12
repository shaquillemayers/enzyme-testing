import commentsReducer from "reducers/comments";
import { SAVE_COMMENT } from "actions/types";

it("handles actions of type SAVE_COMMENT", () => {
  const action = {
    type: SAVE_COMMENT,
    payload: "new comment",
  };

  const newState = commentsReducer([], action);

  expect(newState).toEqual(["new comment"]);
});

it("handles all other action types", () => {
  const newState = commentsReducer([], {
    type: "Test Type",
    payload: "Test Payload",
  });

  expect(newState).toEqual([]);
});
