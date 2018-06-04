import React from "react";
import { storiesOf } from "@storybook/react";
import { doc } from 'storybook-readme';
import README from './README.md';
import Flash from "./index";

import { withKnobs, select, boolean, text } from '@storybook/addon-knobs/react';

storiesOf('Flash', module).add('Overview', doc(README));

const stories = storiesOf('Flash', module);
stories.addDecorator(withKnobs);

const label = 'Type';

const options = {
  defaultType: '',
  notice: 'notice',
  warning: 'warning',
  alert: 'alert',
};

const defaultValue = 'defaultType';

stories.add("Display", () => (
  <Flash message={text("Message", "A flash message")} fade={boolean('Fade', false)} type={select(label, options, defaultValue, "Flash Notices")} />
));

