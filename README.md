# EMR template 

## Local setup

After cloning the repository, run
```
git submodule update --init
cp contrib/emr-config/config.local.js contrib/emr-config/config.js
yarn

yarn extract
yarn compile
```

Every time when you make change in fhir-emr repository, you need to run `yarn prepare`.
This command does:
- Compiles fhir-emr locales
- Builds fhir-emr as a package
- Compiles this project locales 

Also it runs automatically when you execute `yarn`


## Configuration

Configuration is done using pseudo package called @beda.software/emr-config, it contains just one file `config.js` that is used by @beda.software/emr. 
To access the config, use import from `@beda.software/emr-config` both in fhir-emr and in the local project.

