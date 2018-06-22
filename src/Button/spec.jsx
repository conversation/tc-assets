import $ from "jquery";
import React from "react";
import Button from "./";
import styles from "./styles.css";
import { mount } from "enzyme";

describe('<Button />', () => {
  describe("when props.onClick is present", () => {
    const onClick = jest.fn();
    const wrapper = mount(<Button onClick={onClick}>Click Me!</Button>);

    test("is a button", () => {
      expect(wrapper.find("button")).toHaveLength(1);
    });

    test("has the house style", () => {
      expect(wrapper.find("button").hasClass([styles.button])).toEqual(true);
    });

    test("has the contents from props.children", () => {
      expect(wrapper.find("button").text()).toEqual("Click Me!");
    });

    describe("when clicked", () => {
      test("calls props.onClick", () => {
        wrapper.find("button").simulate("click");
        expect(onClick).toHaveBeenCalled();
      });
    });
  });

  describe("when props.href is present", () => {
    const wrapper = mount(<Button href="going.places">Linked Up!</Button>);
    test("is an anchor", () => {
      expect(wrapper.find("a")).toHaveLength(1);
    });

    test("has the house style", () => {
      expect(wrapper.find("a").hasClass([styles.button])).toEqual(true);
    });

    test("has the contents from props.children", () => {
      expect(wrapper.find("a").text()).toEqual("Linked Up!");
    });

    test("sets the anchor's HREF", () => {
      expect(wrapper.find("a").props().href).toEqual("going.places");
    });
  });

  describe("props.disabled", () => {
    const wrapper = mount(<Button disabled={true}>Button text</Button>);

    describe("when true", () => {
      test("disables the button", () => {
        expect(wrapper.props().disabled).toEqual(true);
      });
    });

    describe("when false", () => {
      const wrapper = mount(<Button disabled={false}>Button text</Button>);
      test("enables the button", () => {
        expect(wrapper.props().disabled).toEqual(false);
      });
    });
  });

  describe("props.position", () => {
    const wrapper = mount(<Button position={""}>Button text</Button>);

    describe("when blank", () => {
      test("sets no position style", () => {
        expect(wrapper.find("button").hasClass(styles.left)).toEqual(false);
        expect(wrapper.find("button").hasClass(styles.right)).toEqual(false);
      });
    });

    describe("when left", () => {
      const wrapper = mount(<Button position={"left"}>Button text</Button>);
      test("adds the left style", () => {
        expect(wrapper.find("button").hasClass(styles.left)).toEqual(true);
      });
    });

    describe("when right", () => {
      const wrapper = mount(<Button position={"right"}>Button text</Button>);
      test("adds the right style", () => {
        expect(wrapper.find("button").hasClass(styles.right)).toEqual(true);
      });
    });
  });

  describe("props.size", () => {
    describe("when 'large'", () => {
      const wrapper = mount(<Button size={"large"}>Button text</Button>);
      test("adds large style", () => {
        expect(wrapper.find("button").hasClass(styles.large)).toEqual(true);
      });
    });
  });

  describe("props.type", () => {
    describe("when 'primary'", () => {
      const wrapper = mount(<Button type={"primary"}>Button text</Button>);
      test("adds primary style", () => {
        expect(wrapper.find("button").hasClass(styles.primary)).toEqual(true);
      });
    });

    describe("when 'danger'", () => {
      const wrapper = mount(<Button type={"danger"}>Button text</Button>);
      test("adds danger style", () => {
        expect(wrapper.find("button").hasClass(styles.danger)).toEqual(true);
      });
    });
  });
});
