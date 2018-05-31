import React from "react";
import { shallow } from "enzyme";
import Spinner from "./";

describe("<Spinner />", () => {
  describe("default props", () => {
    test("is enabled by default with the \"Loading\" title", () => {
      const wrapper = shallow(<Spinner />);
      expect(wrapper.find("span")).toHaveLength(1);
      expect(wrapper.find("span").prop("title")).toEqual("Loading");
    });
  });

  describe("when enabled", () => {
    test("should render a span", () => {
      const wrapper = shallow(<Spinner enabled />);
      expect(wrapper.find("span")).toHaveLength(1);
    });
  });

  describe("when disabled", () => {
    test("should not render a span", () => {
      const wrapper = shallow(<Spinner enabled={false} />);
      expect(wrapper.find("span")).toHaveLength(0);
    });
  });

  describe("with a title", () => {
    test("should render a span with the title", () => {
      const wrapper = shallow(<Spinner enabled title="boo" />);
      expect(wrapper.find("span").prop("title")).toEqual("boo");
    });
  });
});
