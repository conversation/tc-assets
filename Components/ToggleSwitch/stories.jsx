import React from "react";
import { storiesOf } from "@storybook/react";
import { doc } from 'storybook-readme';
import README from './README.md';
import ToggleSwitch from "./index";

storiesOf('ToggleSwitch', module).add('Overview', doc(README));
storiesOf("ToggleSwitch", module).addWithChapters('Display',  {
  chapters: [
    {
      sections: [
        {
          title: "Off",
          info: "The default ToggleSwitch is set to the off state",
          sectionFn: () => (
            <ToggleSwitch name="FirstToggle" labelText="First toggle label text" />

          )
        }, {
          title: "On",
          info: "The ToggleSwitch can also be toggled to the on state",
          sectionFn: () => (
            <ToggleSwitch name="SecondToggle" checked labelText="Second toggle label text" />
          )
        }
      ]
    }
  ]
});
