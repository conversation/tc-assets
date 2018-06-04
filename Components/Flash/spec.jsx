import React from "react";
import { mount } from "enzyme";
import Flash from "./index";
import styles from "./styles.css";

describe('<Flash />', () => {


  describe("when message is present", () => {
    const message = "Check it out, y'all. Everyone who was invited is here.";

    describe("parts", () => {
      const wrapper = mount(<Flash message={message} type="notice" />);
      it("is a P", () => {
        expect(wrapper.find("p")).toHaveLength(1);
      });

      it("has the flash class", () => {
        expect(wrapper.find("p").hasClass([styles.flash])).toEqual(true);
      });

      it("shows props.message", () => {
        expect(wrapper.find("p").text()).toEqual(message);
      });
    });

    describe("props.type", () => {
      describe("when 'notice'", () => {
        const wrapper = mount(<Flash message={message} type="notice" />);
        it("has the notice class", () => {
          expect(wrapper.find("p").hasClass([styles.notice])).toEqual(true);
        });
      });

      describe("when 'warning'", () => {
        const wrapper = mount(<Flash message={message} type="warning" />);
        it("has the warning class", () => {
          expect(wrapper.find("p").hasClass([styles.warning])).toEqual(true);
        });
      });

      describe("when 'alert'", () => {
        const wrapper = mount(<Flash message={message} type="alert" />);
        it("has the alert class", () => {
          expect(wrapper.find("p").hasClass([styles.alert])).toEqual(true);
        });
      });
    });

    describe("props.fade", () => {
      describe("when true", () => {
        const wrapper = mount(<Flash fase={true} message={message} type="notice" />);
        it("has the fade class", () => {
          expect(wrapper.find("p").hasClass([styles.fade])).toEqual(true);
        });
      });
    });
  });

  describe("when message is absent", () => {
    const wrapper = mount(<Flash message={undefined} />);
    it("shows nothing", () => {
      expect(wrapper.find("p")).toHaveLength(0);
    });
  });
});
