import { string, object } from "yup";

import { createAction } from "./index";

describe("core", () => {
  test("create an action without validation", () => {
    const expectedAction = {
      type: "MY_ACTION",
      payload: {
        id: "123ABC"
      }
    };

    const action = createAction("MY_ACTION")({ id: "123ABC" });

    expect(action).toEqual(expectedAction);
  });

  test("create an action with missing payload property", () => {
    const action = createAction("MY_ACTION", {
      validationSchema: object({
        id: string(),
        name: string().required()
      })
    });

    expect(() => {
      action({ id: "123ABC" });
    }).toThrowError(new Error(`Property is missing in action payload`));
  });

  test("create an action with valid payload", () => {
    const expectedAction = {
      type: "MY_ACTION",
      payload: {
        id: "123ABC",
        name: "My name is"
      }
    };

    const action = createAction("MY_ACTION", {
      validationSchema: object({
        id: string(),
        name: string().required()
      })
    })({ id: "123ABC", name: "My name is" });

    expect(action).toEqual(expectedAction);
  });
});
