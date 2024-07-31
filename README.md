# EMR template

- [Docs](https://docs.emr.beda.software/Developers%20Guide/custom-emr-build)
- [Beda EMR](https://github.com/beda-software/fhir-emr)

## Intro

Beda EMR is designed to be a framework for building EHR and EMR solutions on top of it. This article describes how you can build your own custom version of Beda EMR suitable for your needs.

We prepared [Beda EMR template](https://github.com/beda-software/emr-template) for quick project initialization. The template
- uses [vitejs](https://vitejs.dev/) and [yarn](https://yarnpkg.com/) for building frontend;
- already includes all required dev dependencies;
- includes [Beda EMR](https://github.com/beda-software/fhir-emr) as dependency so you could use containers, components, utils, etc. for you EMR;
- has [linter](https://eslint.org/), [prettier](https://prettier.io/) and [husky](https://typicode.github.io/husky/) configured for better development experience;
- includes basic [lingui](https://lingui.dev/) configuration
- includes custom [aidbox types](https://docs.aidbox.app/storage-1/aidbox-and-fhir-formats)
- has [storybook](https://storybook.js.org/) configured for development your custom components

## Quick start guide

1. Initialize the project.
Start with fork or clone of [Beda EMR template](https://github.com/beda-software/emr-template).

2. Initialize [Beda EMR](https://github.com/beda-software/fhir-emr) submodule.
```
git submodule update --init
```

3. Copy local configuration file for development
```
cp contrib/emr-config/config.local.js contrib/emr-config/config.js
```

4. Prepare to run
```
yarn
```

5. Build language locales
```
yarn compile
```

6. Run
```
yarn start
```

Now you have fhir-emr under your full control.

Next steps:
- you can copy the whole https://github.com/beda-software/fhir-emr/blob/master/src/containers/App/index.tsx into your workspace to adjust routes and adjust page components.
- you can replace the patient dashboard and theme as the next step of customization.


## Running backend

Copy envs
```
cp contrib/fhir-emr/.env.tpl contrib/fhir-emr/.env
```

add your aidbox license to .env

```
cd contrib/fhir-emr
docker-compose up
```

## Adding new code to EMR submodule

You can update code of EMR inside `contrib/fhir-emr` directory.
But to see your changes you need to run

```
yarn prepare
```

Remember to push or make pull request for your changes in [Beda EMR](https://github.com/beda-software/fhir-emr) if you want them to be applied.

Then add updated submodule to your git commit
```
git add contrib/fhir-emr
git commit -m "Update submodule"
```

## Language locales

If you have new messages in your app that need to be translated use 

```
yarn extract
```

then add the translations and run

```
yarn compile
```

## Storybook

Storybook works out of the box. If you need to create your own components you can create stories for them.

To run storybook use
```
yarn storybook
```

The main storybook for Beda EMR also publicly available [here](https://master--64b7c5c51809d460dc448e6b.chromatic.com/).

## Imports troubleshooting

<b>1. If you face typescript/eslint error like</b>

```js
Module '"@beda.software/emr/utils"' has no exported member 'getPersonAge'
```

Make sure that `getPersonAge` was used somewhere in the Beda EMR or it was explicitly exported

```js
export * from './relative-date.ts';
```

<b> 2. If you face next eslint error when you import interface or type</b>

```js
Unable to resolve path to module '@beda.software/emr/dist/components/Dashboard/types'.(eslintimport/no-unresolved)

```

Make sure to add  `type` when for your import

```js
import type { Dashboard } from '@beda.software/emr/dist/components/Dashboard/types';


