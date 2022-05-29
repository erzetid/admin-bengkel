// Copyright (c) 2022 fahrizalm14
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
export const multiply = (a: number, b: number): number => a * b;

describe("Jest correct running.", () => {
  it("multiply", () => {
    expect(multiply(2, 2)).toBe(4);
  });
});
