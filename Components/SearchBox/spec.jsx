import React from "react";
import { shallow } from "enzyme";
import SearchBox from "./index";

describe("<SearchBox />", () => {
  test("renders the placeholder", () => {
    const filterSearch = shallow(<SearchBox placeholder="foo" onChange={() => {}} />);
    expect(filterSearch.find("input").prop("placeholder")).toBe("foo");
  });

  describe("onChange callback", () => {
    const e = { target: { value: "foo" } };

    test("executes the callback on keyup", (done) => {
      const callback = (value) => {
        expect(value).toEqual("foo");
        done();
      };
      const filterSearch = shallow(<SearchBox onChange={callback} />);
      filterSearch.find("input").simulate("keyup", e);
    });

    test("throttles the callback", (done) => {
      const callback = jest.fn();
      const filterSearch = shallow(<SearchBox onChange={callback} />);
      filterSearch.find("input").simulate("keyup", e);
      filterSearch.find("input").simulate("keyup", e);
      setTimeout(() => {
        expect(callback).toHaveBeenCalledTimes(1);
        done();
      }, 500)
    });
  });
});
