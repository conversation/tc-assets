import React from "react";
import { storiesOf } from "@storybook/react";
import { doc } from 'storybook-readme';
import README from './README.md';
import Flash from "./index";

import { withKnobs, boolean, text } from '@storybook/addon-knobs/react';

storiesOf('Flash', module).add('Overview', doc(README));

const stories = storiesOf('Flash', module);
stories.addDecorator(withKnobs);
// We need to display these as separate stories as each flash message
// has `position: fixed`, and we can't display these on one screen
// without them overlapping each other.

stories.add("Notice", () => (
  <Flash message={text("Message", "A flash message")} type="notice" />
))
.add("Warning", () => (
  <Flash message={text("Message", "A flash message")} type="warning" />
))
.add("Alert", () => (
  <Flash message={text("Message", "A flash message")} type="alert" />
))
.add("Fade", () => (
  <Flash message={text("Message", "A flash message")} fade={boolean('Fade', false)} />
));;

