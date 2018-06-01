import React from "react";
import { shallow } from "enzyme";
import ToggleSwitch from "./index";

describe("<ToggleSwitch />", () => {
  const onChangeSpy = jest.fn();
  const wrapper = shallow(<ToggleSwitch name="some-name" value="random-value" onChange={onChangeSpy} />);

  describe("default props", () => {
    test("it is unchecked by default", () => {
      const checkboxSelector = "input[type='checkbox']";
      expect(wrapper.find(checkboxSelector).props().checked).toEqual(false);
      expect(wrapper.state("checked")).toEqual(false);
    });
  });

  describe("#componentWillReceiveProps", () => {
    test("change the checked state when receiving new props", () => {
      wrapper.setProps({ checked: true });
      expect(wrapper.state("checked")).toEqual(true);
      wrapper.setProps({ checked: false });
      expect(wrapper.state("checked")).toEqual(false);
    });
  });

  describe("#onClick", () => {
    // Note: this is the closest to what we have to simulate the click event on checkbox on browsers
    // As the click event results on toggling the checkbox (checking/unchecking)
    test("set checked state as the result of the clicking event (toggle checked)", () => {
      const checkboxSelector = "input[type='checkbox']";

      wrapper.find(checkboxSelector).simulate("click", { target: { checked: true } });
      expect(wrapper.state("checked")).toEqual(true);

      wrapper.find(checkboxSelector).simulate("click", { target: { checked: false } });
      expect(wrapper.state("checked")).toEqual(false);
    });
  });

  describe("#onChange", () => {
    test("triggers the change event", () => {
      const checkboxSelector = "input[type='checkbox']";
      wrapper.find(checkboxSelector).simulate("change", { target: { checked: true } });
      expect(onChangeSpy).toHaveBeenCalledWith({ target: { checked: true } });
    });
  });

  describe("#inputId", () => {
    const result = wrapper.instance().inputId();

    test("calculates input ID concatenating its name and value", () => {
      expect(result).toEqual("some-name-random-value");
    });
  });

  describe("#render", () => {
    test("has a label ID matching the hidden input", () => {
      const checkboxSelector = "#some-name-random-value";
      const labelSelector = "label[htmlFor='some-name-random-value']";
      expect(wrapper.find(labelSelector)).toHaveLength(1);
      expect(wrapper.find(checkboxSelector)).toHaveLength(1);
    });
  });
});
