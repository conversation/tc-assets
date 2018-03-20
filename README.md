# tc-assets

A package containing sharable TC assets, including:

- logos
  - for AMP as well

## Usage

Installing this package will also install the appropriate version of eslint and the base airbnb configuration to match the configured rules.

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
