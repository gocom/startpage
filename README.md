Start Page
=====

[Demo](https://gocom.github.io/startpage/) | [Download](https://github.com/gocom/startpage/releases)

[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=gocom_startpage&metric=coverage)](https://sonarcloud.io/dashboard?id=gocom_startpage) [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=gocom_startpage&metric=alert_status)](https://sonarcloud.io/dashboard?id=gocom_startpage)

Personal new tab speed dial. Work in progress.

![Screenshot](https://raw.githubusercontent.com/gocom/startpage/screenshots/newtab.png)

Install
-----

### As a web extension

Download a packaged web extension from [releases](https://github.com/gocom/startpage/releases)
or [build artifacts](https://github.com/gocom/startpage/actions?query=workflow%3ACI)
and load it in your web browser.

There are currently no releases in any extension marketplaces; Chrome Web Store
and the like.

### As a web app

Create a built app using [npx](https://www.npmjs.com/package/npx):

```shell
$ npx gocom/startpage
```

Built web app will be found from the `build` directory in the current working
directory.

### Locally from source

Clone the repository, install and build:

```
$ git clone https://github.com/gocom/startpage.git
$ npm install
```

For more information about local development see [CONTRIBUTING.md](https://github.com/gocom/startpage/blob/master/CONTRIBUTING.md).
