import React from 'react';
import { storiesOf } from '@storybook/react';
import FileDownload from '../FileDownload/';
import Swatch from '../Swatch/';

import logoEnSVG from '../../logos/logo-en.svg';
import logoEnPNG from '../../logos/logo-en.png';

import logoFrSVG from '../../logos/logo-fr.svg';
import logoFrPNG from '../../logos/logo-fr.png';

import logoEsSVG from '../../logos/logo-es.svg';
import logoEsPNG from '../../logos/logo-es.png';

import bubble114x114 from '../../logos/logo-114x114.png';
import bubble192x192 from '../../logos/logo-192x192.png';

import styles from './styles.css';

storiesOf("Welcome", module).add("Introduction", () => (
  <div>
    <img src={logoEnSVG} />
    <p>Welcome to the The Conversation design guide.</p>
    <p>It contains examples of the React components we use in our apps.</p>
  </div>
));

storiesOf("Welcome", module).add("Colours", () => (
  <div>
    <h1 className={styles.storybookHeader}>Colour Palette</h1>

    <h3 className={styles.storybookHeader}>Brand colours</h3>
    <Swatch hex="#d8352a" name="TC Red" />
    <Swatch hex="#383838" name="TC Grey" />

    <h3 className={styles.storybookHeader}>Link colours</h3>
    <Swatch hex="#069" name="Link Blue" />
    <Swatch hex="#557585" name="Link (Visited)" />
    <Swatch hex="#2d8cd6" name="Link (Hover)" />

    <h3 className={styles.storybookHeader}>Feature colours</h3>
    <Swatch hex="#da352a" name="eb_red" />
    <Swatch hex="#f5a623" name="eb_orange" />
    <Swatch hex="#50e3c2" name="eb_green" />
    <Swatch hex="#4a90e2" name="eb_blue" />
    <Swatch hex="#e50c20" name="Friends of TC Red" />
  </div>
));

storiesOf("Welcome", module).add("Logos", () => (
  <div>
    <h1 className={styles.storybookHeader}>Logos</h1>

    <h3 className={styles.storybookHeader}>Full brandmark</h3>

    <h5 className={styles.storybookHeader}>English</h5>
    <img className={styles.image} src={logoEnSVG} />
    <FileDownload file={logoEnSVG} fileType="SVG" label="logo-en.svg" />
    <FileDownload file={logoEnPNG} fileType="PNG" label="logo-en.png" />

    <h5 className={styles.storybookHeader}>French</h5>
    <img className={styles.image} src={logoFrSVG} />
    <FileDownload file={logoFrSVG} fileType="SVG" label="logo-fr.svg" />
    <FileDownload file={logoFrPNG} fileType="PNG" label="logo-fr.png" />

    <h5 className={styles.storybookHeader}>Spanish</h5>
    <img className={styles.image} src={logoEsSVG} />
    <FileDownload file={logoEsSVG} fileType="SVG" label="logo-es.svg" />
    <FileDownload file={logoEsPNG} fileType="PNG" label="logo-es.png" />

    <h3 className={styles.storybookHeader}>Speech bubble</h3>
    <img className={styles.image} src={bubble114x114} />
    <FileDownload file={bubble114x114} fileType="PNG" label="logo-114x114.png" />
    <FileDownload file={bubble192x192} fileType="PNG" label="logo-192x192.png" />
  </div>
));
