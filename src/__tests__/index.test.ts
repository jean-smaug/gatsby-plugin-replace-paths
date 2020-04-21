import * as module from "..";

describe("gatsby-plugin-replace-paths", () => {
  it("exports functions", () => {
    expect(module).toEqual({
      __esModule: true,
      onCreatePage: expect.any(Function),
    });
  });
});
