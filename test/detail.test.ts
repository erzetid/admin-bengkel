// Copyright (c) 2022 fahrizalm14
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Detail } from "../src/entity/tx/Detail";

describe("Class Detail", () => {
  it("should have a constructor", () => {
    const detail = new Detail(
      [{ id: "1", name: "Pad Set Fr", price: 100, quantity: 1 }],
      [{ id: "1", name: "Service Matic", price: 100 }],
      100,
      100,
      100,
      100,
      100,
      100,
      1.1,
      11,
      11
    );

    expect(detail).toBeInstanceOf(Detail);
  });
});
