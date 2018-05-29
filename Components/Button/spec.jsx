import React from "react";
import { shallow } from "enzyme";
import Button from "./index";
import styles from "./styles.css";

describe('<Button />', () => {
  describe("when props.onClick is present", () => {
    def("wrapper", () => shallow(<Button onClick={$onClick}>Click Me!</Button>));
    def("onClick", () => sinon.spy());
    it("is a button", () => {
      expect($wrapper.find("button")).to.have.length(1);
    });

    it("has the house style", () => {
      expect($wrapper.find(`button.${styles.button}`)).to.have.length(1);
    });

    it("has the contents from props.children", () => {
      expect($wrapper.find("button").text()).to.eql("Click Me!");
    });

    describe("when clicked", () => {
      it("calls props.onClick", () => {
        $wrapper.find("button").simulate("click", { preventDefault: () => {} });
        expect($onClick.called).to.eql(true);
      });
    });
  });

  describe("when props.href is present", () => {
    def("wrapper", () => shallow(<Button href="going.places">Linked Up!</Button>));
    it("is an anchor", () => {
      expect($wrapper.find("a")).to.have.length(1);
    });

    it("has the house style", () => {
      expect($wrapper.find(`a.${styles.button}`)).to.have.length(1);
    });

    it("has the contents from props.children", () => {
      expect($wrapper.find("a").text()).to.eql("Linked Up!");
    });

    it("sets the anchor's HREF", () => {
      expect($wrapper.find("a").props().href).to.eql("going.places");
    });
  });

  describe("props.disabled", () => {
    def("wrapper", () => shallow(<Button disabled={$disabled} />));

    describe("when true", () => {
      def("disabled", () => true);
      it("disables the button", () => {
        expect($wrapper.props().disabled).to.eql(true);
      });
    });

    describe("when false", () => {
      def("disabled", () => false);
      it("enables the button", () => {
        expect($wrapper.props().disabled).to.eql(false);
      });
    });
  });

  describe("props.position", () => {
    def("wrapper", () => shallow(<Button position={$position} />));

    describe("when blank", () => {
      def("position", () => "");
      it("sets no position style", () => {
        expect($wrapper.hasClass(styles.left)).to.eql(false);
        expect($wrapper.hasClass(styles.right)).to.eql(false);
      });
    });

    describe("when left", () => {
      def("position", () => "left");
      it("adds the left style", () => {
        expect($wrapper.hasClass(styles.left)).to.eql(true);
      });
    });

    describe("when right", () => {
      def("position", () => "right");
      it("adds the right style", () => {
        expect($wrapper.hasClass(styles.right)).to.eql(true);
      });
    });
  });

  describe("props.size", () => {
    def("wrapper", () => shallow(<Button size={$size} />));

    describe("when 'large'", () => {
      def("size", () => "large");
      it("adds large style", () => {
        expect($wrapper.hasClass(styles.large)).to.eql(true);
      });
    });
  });

  describe("props.type", () => {
    def("wrapper", () => shallow(<Button type={$type} />));

    describe("when 'primary'", () => {
      def("type", () => "primary");
      it("adds primary style", () => {
        expect($wrapper.hasClass(styles.primary)).to.eql(true);
      });
    });

    describe("when 'danger'", () => {
      def("type", () => "danger");
      it("adds danger style", () => {
        expect($wrapper.hasClass(styles.danger)).to.eql(true);
      });
    });
  });
});
