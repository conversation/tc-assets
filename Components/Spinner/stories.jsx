import React from "react";
import { storiesOf } from "@storybook/react";
import { doc } from 'storybook-readme';
import README from './README.md';
import Spinner from "./index";

storiesOf('Spinner', module).add('Overview', doc(README));
storiesOf("Spinner", module).addWithChapters('Display',  {
  chapters: [
    {
      sections: [
        {
          title: "Default",
          info: "The default spinner is used to indicate to the user that something is happening.",
          sectionFn: () => (
            <Spinner title="Hello" />
          )
        }
      ]
    }
  ]
});
