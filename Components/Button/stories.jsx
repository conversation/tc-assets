import React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import chaptersAddon from 'react-storybook-addon-chapters';
import { doc } from 'storybook-readme';
import README from './README.md';
import Button from "./index";

setAddon(chaptersAddon);
storiesOf('Button', module).add('Overview', doc(README));
storiesOf("Button", module).addWithChapters('Display', {
  chapters: [
    {
      sections: [
        {
          title: "Standard",
          info: "Indicates a neutral informative change or action.",
          subtitle: "Default",
          sectionFn: () => (
            <Button onClick={action("Button Clicked")}>Button text</Button>
          )
        }, {
          title: "Primary",
          info: "Indicates a successful or positive action.",
          sectionFn: () => (
            <Button onClick={action("Button Clicked")} type="primary">Button text</Button>
          )
        }, {
          title: "Danger",
          info: "Indicates a dangerous or potentially negative action.",
          sectionFn: () => (
            <Button onClick={action("Button Clicked")} type="danger">Button text</Button>
          )
        }
      ]
    }
  ]
}).addWithChapters('Positioning', {
  chapters: [
    {
      sections: [
        {
          title: "Aligned left",
          subtitle: "Default",
          sectionFn: () => (
            <Button onClick={action("Button Clicked")} position="left">Button text</Button>
          )
        }, {
          title: "Aligned right",
          subtitle: "Used to force buttons to sit to the right",
          sectionFn: () => (
            <Button onClick={action("Button Clicked")} position="right">Button text</Button>
          )
        }
      ]
    }
  ]
}).addWithChapters('Sizes', {
  chapters: [
    {
      sections: [
        {
          title: "Regular",
          subtitle: "Default",
          sectionFn: () => (
            <Button onClick={action("Button Clicked")}>Button text</Button>
          )
        }, {
          title: "Large",
          sectionFn: () => (
            <Button onClick={action("Button Clicked")} size="large">Button text</Button>
          )
        }
      ]
    }
  ]
});
