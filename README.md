# Deprecation notice

This repository has been replaced with https://github.com/conversation/ui

# tc-assets

A package containing sharable TC assets, including:

- logos
  - for AMP as well

## Usage

    npm i -D conversation/tc-assets#0.0.2

## Design Guide

We maintain a design guide of all the shared componenets in this library using
the [Storybook](https://storybook.js.org/) tool. The design guide is
automatically published [here](https://design.theconversation.com/), and
may be browsed to see the different uses for each component.

If you want to work on our design guide, then you need to run Storybook:

    npm run start-storybook

## Making Changes

If you add assets to the tc-assets package, you should also bump the minor
version, and push up a new tag matching the latest version. If there are
drastic changes, consider bumping the major version.

    git commit -m "Prepare to release 7.6.5"
    git tag -a 7.6.5 -m "7.6.5"
    git push origin 7.6.5

Then you can upgrade each project to use that new version:

    npm i -D conversation/tc-assets#7.6.5
