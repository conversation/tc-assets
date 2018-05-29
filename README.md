# tc-assets

A package containing sharable TC assets, including:

- logos
  - for AMP as well

## Usage

```
npm i -D conversation/tc-assets#0.0.2
```

## Making changes

If you add assets to the tc-assets package, you should also bump the minor version, and push up a new tag matching the latest version. If there are drastic changes, consider bumping the major version.

```
git commit -m "Prepare to release 7.6.5"
git tag -a 7.6.5 -m "7.6.5"
git push origin 7.6.5
```

Then you can upgrade each project to use that new version:
```
npm i -D conversation/tc-assets#7.6.5
```

## Storybook

[Storybook](https://storybook.js.org/) is a UI development environment we're using for our UI
components and design guide. To run Storybook locally from your command line:

```
npm run storybook
```
