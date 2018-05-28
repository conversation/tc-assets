import React from 'react';
import { storiesOf } from '@storybook/react';
import Swatch from './Swatch/'

storiesOf("Welcome", module).add("Introduction", () => (
  <h1 class="storybook-header">Introduction</h1>
));

storiesOf("Welcome", module).add("Colours", () => (
  <div>
    <h1 class="storybook-header">Colour Palette</h1>

    <h3 className="storybook-header">Brand colours</h3>
    <Swatch hex="#d8352a" name="TC Red" />
    <Swatch hex="#383838" name="TC Grey" />

    <h3 className="storybook-header">Link colours</h3>
    <Swatch hex="#069" name="Link Blue" />
    <Swatch hex="#557585" name="Link (Visited)" />
    <Swatch hex="#2d8cd6" name="Link (Hover)" />

    <h3 className="storybook-header">Feature colours</h3>
    <Swatch hex="#da352a" name="eb_red" />
    <Swatch hex="#f5a623" name="eb_orange" />
    <Swatch hex="#50e3c2" name="eb_green" />
    <Swatch hex="#4a90e2" name="eb_blue" />
    <Swatch hex="#e50c20" name="Friends of TC Red" />
  </div>
));
