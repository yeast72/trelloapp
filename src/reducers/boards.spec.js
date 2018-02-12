import boards from "./boards";
import * as types from "../constants/ActionTypes";

describe("boards reducer", () => {
  it("should handle initial state", () => {
    expect(boards(undefined, {})).toEqual([
      {
        text: "Use Redux",
        id: 0
      }
    ]);
  });

  it("should handle ADD_TODO", () => {
    expect(
      boards([], {
        type: types.ADD_BOARD,
        text: "Run the tests"
      })
    ).toEqual([
      {
        text: "Run the tests",
        id: 0
      }
    ]);

    expect(
      boards(
        [
          {
            text: "Use Redux",
            id: 0
          }
        ],
        {
          type: types.ADD_BOARD,
          text: "Run the test"
        }
      )
    ).toEqual([
      {
        text: "Use Redux",
        id: 0
      },
      {
        text: "Run the test",
        id: 1
      }
    ]);
  });
});
