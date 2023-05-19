Contributing
=====

License
-----

[MIT](https://raw.github.com/gocom/startpage/master/LICENSE).

Versioning
----

[Semantic Versioning](https://semver.org/).

Development
----

### Requirements

Development environment is ran using Docker images to limit host system dependencies. Requirements for the development
environment are:

* GNU make
* [Docker](https://www.docker.com/)
* [docker-compose](https://github.com/docker/compose) installed as a standalone application to PATH

### Available commands

For all available commands, see:

```
$ make help
```

### Building

To build, run:

```
$ make build
```

### Coding style

To verify that your additions follows coding style, run:

```
$ make lint
```

To try to automatically resolve issues, run:

```
$ make lint-fix
```

### Unit tests

All additions should have unit tests, and all tests should pass. To verify that
tests pass, run:

```
$ make test-unit
```

Configure git
-----

For convenience your committer, git user, should be linked to your GitHub
account:

```
$ git config --global user.name "John Doe"
$ git config --global user.email john.doe@example.com
```

Make sure to use an email address that is linked to your GitHub account. It can
be a throwaway address or you can use GitHub's email protection features. We
don't want your emails, but this is to make sure we know who did what. All
commits nicely link to their author, instead of them coming from
``foobar@invalid.tld``.

Creating a release
-----

First make sure CHANGELOG.md contains a new section for the new release. Header
should contain the version number and changes should be written down as a list:

```markdown
## y.z.x

* Change 1 #ISSUE-NUMBER
* Change 2 #ISSUE-NUMBER
```

Then to bump version numbers:

```
$ make bump-version
```

Commit CHANGELOG.md and package.json and tag a new release:

```
$ git add -u
$ git commit -m y.z.x
$ git tag -a y.z.x
```
