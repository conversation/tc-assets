import React from "react";
import { storiesOf } from "@storybook/react";
import { doc } from 'storybook-readme';
import README from './README.md';
import Spinner from "./index";

storiesOf('Spinner', module).add('Documentation', doc(README));
storiesOf("Spinner", module).addWithChapters('Display',  {
  chapters: [
    {
      sections: [
        {
          title: "Standard",
          subtitle: "Default set to 'loading'",
          info: "Indicates a neutral informative change or action.",
          sectionFn: () => (
            <Spinner title="Hello">Button text</Spinner>
          )
        }, {
          title: "Enabled",
          info: "If set to false, the spinner is no longer shown.",
          subtitle: "Default set to true",
          sectionFn: () => (
            <Spinner enabled={false}>Button text</Spinner>
          )
        }
      ]
    }
  ]
});
