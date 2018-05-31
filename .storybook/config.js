import React from 'react';
import * as storybook from '@storybook/react';
import infoAddon from '@storybook/addon-info';
import { setOptions } from '@storybook/addon-options';
import { action, configureActions } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import chaptersAddon, { setDefaults } from 'react-storybook-addon-chapters';
import Welcome from './welcome.js';
import './styles.css';

setOptions({
  name: 'The Conversation',
  url: 'https://theconversation.com',
  goFullScreen: false,
  showStoriesPanel: true,
  showAddonPanel: true,
  showSearchBox: false,
  addonPanelInRight: false,
  sortStoriesByKind: false
});

setDefaults({
  sectionOptions: {
    showSource: true,
    allowSourceToggling: false,
    showPropTables: false,
    allowPropTablesToggling: false,
  }
});

storybook.setAddon(chaptersAddon);
storybook.setAddon(infoAddon);

const req = require.context('../Components', true, /.stories.jsx$/);

storybook.configure(
  () => {
    req.keys().forEach((filename) => req(filename));
  },
  module
);
