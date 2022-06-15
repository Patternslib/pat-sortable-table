# Changelog



## [3.0.0-alpha.0](https://github.com/patternslib/pat-sortable-table/compare/2.0.0...3.0.0-alpha.0) (2022-06-15)


### Features


* **Build:** Build module federation enabled bundles. ([5d03f43](https://github.com/patternslib/pat-sortable-table/commit/5d03f43581c3d8ab4504213cebec5693ab201095))

* Optionally import styles when __patternslib_import_styles is set to true. Also import styles in this bundle. ([f373175](https://github.com/patternslib/pat-sortable-table/commit/f373175fc0e81ffcd48ab3342f55d0543f1a13c1))


### Bug Fixes


* Fix an issue where DataTables could not be initialized when yarn/nmp-linking packages and multiple jQuery versions were used. ([150ec58](https://github.com/patternslib/pat-sortable-table/commit/150ec580a790824df0367cbd534365dfbdbfecee))

* Fix path to bundle.js in demo. ([511d834](https://github.com/patternslib/pat-sortable-table/commit/511d83409a85003f327a15707b108997fdd212eb))


### Breaking Changes


* Depend on @patternslib/dev and extend config from there. ([456a917](https://github.com/patternslib/pat-sortable-table/commit/456a917de43cdd0590945a59d24f54c6484f7a84))

* Extend babel config from @patternslib/dev. ([796353c](https://github.com/patternslib/pat-sortable-table/commit/796353c6fc465739458055628fdb99ee6b4631a9))

* Extend commitlint config from @patternslib/dev. ([e666073](https://github.com/patternslib/pat-sortable-table/commit/e6660736c19030baad45b57551c7742ddb0345b1))

* Extend eslint config from @patternslib/dev. ([df01bf1](https://github.com/patternslib/pat-sortable-table/commit/df01bf1e24c80be20de5572f78bc6a66ea06b849))

* Extend jest config from @patternslib/dev. ([21bf27e](https://github.com/patternslib/pat-sortable-table/commit/21bf27e846c8d7f6a29f1baa3fadf3fe4c48b25d))

* Extend Makefile from @patternslib/dev. ([ecec7da](https://github.com/patternslib/pat-sortable-table/commit/ecec7dabdf64c4d12c03eab776637db25f07d86c))

* Extend prettier config from @patternslib/dev. ([91bd759](https://github.com/patternslib/pat-sortable-table/commit/91bd75992b3f10aba7ba01825d65ce2f3c5f03e1))

* Extend release-it config from @patternslib/dev. ([904bf3f](https://github.com/patternslib/pat-sortable-table/commit/904bf3f6e1707f63d580e67979cce50cae3570f7))

* Extend webpack config from @patternslib/dev. ([ed2f33f](https://github.com/patternslib/pat-sortable-table/commit/ed2f33f68c1411ecf789ec1c196fb81a839ef06e))


### Maintenance


* **build:** Add build:dev script to package.json to create a unminified development build. ([c3643ab](https://github.com/patternslib/pat-sortable-table/commit/c3643abb65912501af729d57c77e0e312f8471db))

* **Build:** @patternslib/patternslib as peerDependency. ([45b2309](https://github.com/patternslib/pat-sortable-table/commit/45b23098509f9cfbaa0f7c79aad87eec294fbb56))Move @patternslib/patternslib dependency to peerDependencies and set to any version to avoid version conflicts when this package is a dependency of another Patternslib based package.

* **Build:** Add @patternslib/patternslib also to devDependencies so that we get it installed. ([a10674e](https://github.com/patternslib/pat-sortable-table/commit/a10674eb5cc3baf690cc91e3a01a619ffc79e672))

* **Build:** Add keyword "patternslib" to package.json. ([74aea4f](https://github.com/patternslib/pat-sortable-table/commit/74aea4ff3e87226e20f3cac85258c65d2b17effa))

* **Build:** Extend jest.config.js from Patternslib and reuse their setupTests file too. ([073dd97](https://github.com/patternslib/pat-sortable-table/commit/073dd97a313d1ea8299698ace53a7887471bb8f0))

* **Build:** Keep yarn.lock in repository. ([617569d](https://github.com/patternslib/pat-sortable-table/commit/617569d75b516bfd63e5d76e9c4dd0221e6e5a02))

* **Build:** Makefile - Allow OTP when publishing to npm, build bundles and publish them on GitHub, add pre-release targets. ([b1c4e45](https://github.com/patternslib/pat-sortable-table/commit/b1c4e452566ad18ddf551731b0419bd5a9b805e0))

* **Build:** Remove dependency regenerator-runtime except from test setup. The async/await runtime handling is already built-in in current Babel. ([7deffff](https://github.com/patternslib/pat-sortable-table/commit/7deffff8dbd161b36558016993bfbb79ac1346e4))

* **Build:** Update GitHub actions setup. ([6396ae3](https://github.com/patternslib/pat-sortable-table/commit/6396ae3bd8e1897a529ac5f2c0283db968635c6c))

* **Build:** Upgrade and cleanup dependencies. ([0f98123](https://github.com/patternslib/pat-sortable-table/commit/0f98123c9809de090c07a14a68fbdc7e21724570))

* **Build:** Upgrade to datatables 1.12. ([969767b](https://github.com/patternslib/pat-sortable-table/commit/969767bb94598494ffef8a421b5777ba95584909))

* **webpack:** Configure devServer static directory. ([edd4ccc](https://github.com/patternslib/pat-sortable-table/commit/edd4cccd0d494bc1f98413476bc31424c3ebf109))

## [2.0.0](https://github.com/patternslib/pat-sortable-table/compare/1.1.0...2.0.0) (2021-11-18)


### Breaking Changes

* Upgrade to Webpack 5. ([9105f9b](https://github.com/patternslib/pat-sortable-table/commit/9105f9b6cba09cffff6f12dfeeb27f22b399b3aa))



### Maintenance

* **build:** Extend Patternslib release-it config file. ([039dd16](https://github.com/patternslib/pat-sortable-table/commit/039dd16cf77d2674948825d8c556698d864ad1d5))

* **build:** Release on GitHub releases. ([cccfc8d](https://github.com/patternslib/pat-sortable-table/commit/cccfc8d1a0de9fb300bbebc840ddaa20c820cbcb))

* **dependencies:** Upgrade datatables to 1.11.3. ([479a5df](https://github.com/patternslib/pat-sortable-table/commit/479a5dfa4beaa7b8883d93f8d13b1f61074747d9))

* Upgrade up to minor versions. ([9e07d1f](https://github.com/patternslib/pat-sortable-table/commit/9e07d1f7d3da736c3efc515e3eef3b869eeebf3c))

## [1.1.0](https://github.com/patternslib/pat-sortable-table/compare/1.0.0...1.1.0) (2021-06-15)


### Maintenance

* Test updates after jest upgrade. ([f84028f](https://github.com/patternslib/pat-sortable-table/commit/f84028f295fc780c5010611e652c0d6cc650af7a))
* **dependencies:** Depend on Patternslib v4.4.0. ([3dade03](https://github.com/patternslib/pat-sortable-table/commit/3dade03f289e1288678049227407ca9c38401bd8))
* **dependencies:** Upgrade datatables to 1.10.25. ([ba95de1](https://github.com/patternslib/pat-sortable-table/commit/ba95de16d5917487aed345e145515d4d745925e8))
* **dependencies:** Upgrade dependencies on minor+patch level. ([f0f4c85](https://github.com/patternslib/pat-sortable-table/commit/f0f4c8508df3c5f2647cf8170f86829bc7cdff9d))
* **make release-patch:** Add missing patch for patch level releases. ([569f077](https://github.com/patternslib/pat-sortable-table/commit/569f07793dbd20e33705b9e1581536f5f33d0ef9))
* **Release:** Remove the release-web target. Only Patternslib releases are pushed to Patterns-releases on Github. ([94279a8](https://github.com/patternslib/pat-sortable-table/commit/94279a811e29b9f5df93a1408ce2e3938e4716a8))
* **Release process:** Do not include the release commit in the changelog. ([da9b7ad](https://github.com/patternslib/pat-sortable-table/commit/da9b7adbcdbda0e2bc6e47a29cfcbfb0685efe71))
* **webpack:** Adapt start script to recent dependency changes. ([929b13a](https://github.com/patternslib/pat-sortable-table/commit/929b13a2f583b64928bc9cdc41df3de4bad7961e))
* **webpack:** Simplify webpack. ([2e0321a](https://github.com/patternslib/pat-sortable-table/commit/2e0321a1331c7a5e564dd28022f2109517ccfee8))

## 1.0.0 (2021-04-20)


### Features

* Upgrade DataTables to 1.10.24. ([0677bdb](https://github.com/patternslib/pat-sortable-table/commit/0677bdb37880297b3fdd02d8b9d18ff4082e3748))


### Maintenance

* Fix jQuery version to 3.6.0 for patternslib compatibility. ([dd0d031](https://github.com/patternslib/pat-sortable-table/commit/dd0d03189051102db40d5b76045d6be91e330c0d))
* Upgrade to Patternslib v4 final - sortable table customizations. ([084fefb](https://github.com/patternslib/pat-sortable-table/commit/084fefbe42752358fb460089d76b9494bf8fa287))
* Upgrade to Patternslib v4 final. ([b7879f7](https://github.com/patternslib/pat-sortable-table/commit/b7879f7b5243ed5535267bd994e49c4c1d85c7c0))


## 1.0.0 - unreleased

- Initial release.