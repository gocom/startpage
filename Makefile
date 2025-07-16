.PHONY: all prefix install build bump-version clean package screenshot start stop shell test test-unit lint lint-fix watch help

PREFIX ?=
PREFIX_DIRECTORY_SUFFIX = startpage-build/
NODE_ENV ?= development
HOST_UID != id -u
HOST_GID != id -g
DOCKER_COMPOSE ?= HOST_UID=$(HOST_UID) HOST_GID=$(HOST_GID) NODE_ENV=$(NODE_ENV) docker compose
NODE = $(DOCKER_COMPOSE) run --rm node
NPM = $(NODE) npm

all: help

prefix:
ifneq ($(PREFIX),)
	@echo "Moving build to $(PREFIX)/$(PREFIX_DIRECTORY_SUFFIX)"
	mkdir -p "$(PREFIX)/$(PREFIX_DIRECTORY_SUFFIX)"
	cp -rf build/* "$(PREFIX)/$(PREFIX_DIRECTORY_SUFFIX)"
	rm -rf build
endif

install: build prefix

node_modules:
	$(NPM) install

build: node_modules
	$(NPM) run project:install

bump-version: node_modules
	$(NPM) run bump-version

clean:
	$(NODE) rm -rf build dist node_modules screenshots

package:
	$(NPM) run package

start: node_modules
	$(DOCKER_COMPOSE) up -d
	@echo "Server address: http://localhost:12598/"

stop:
	$(DOCKER_COMPOSE) stop

shell: node_modules
	$(NODE) bash

test: node_modules
	$(NPM) run test

test-unit: node_modules
	$(NPM) run test:unit

lint: node_modules
	$(NPM) run lint

lint-fix: node_modules
	$(NPM) run lint:fix

watch: node_modules
	$(NPM) watch

screenshot: node_modules
	$(DOCKER_COMPOSE) run --rm capture-website http://node:12598 --output=/screenshots/screenshot.png --overwrite

help:
	@echo "Manage project"
	@echo ""
	@echo "Usage:"
	@echo "  $$ make [command] ["
	@echo "    [NODE_ENV=<development|production>]"
	@echo "    [HOST_UID=<uid>]"
	@echo "    [HOST_GID=<gid>]"
	@echo "  ]"
	@echo ""
	@echo "Commands:"
	@echo ""
	@echo "  $$ make build"
	@echo "  Builds the project"
	@echo ""
	@echo "  $$ make clean"
	@echo "  Uninstall the project"
	@echo ""
	@echo "  $$ make install [PREFIX=/path/to/directory]"
	@echo "  Installs the project"
	@echo ""
	@echo "  $$ make lint"
	@echo "  Lint code style"
	@echo ""
	@echo "  $$ make package"
	@echo "  Package build result to a distributable ZIP file"
	@echo ""
	@echo "  $$ make screenshot"
	@echo "  Take screenshot"
	@echo ""
	@echo "  $$ make shell"
	@echo "  Login to Node container"
	@echo ""
	@echo "  $$ make start"
	@echo "  Starts development server"
	@echo ""
	@echo "  $$ make stops"
	@echo "  Stops development server"
	@echo ""
	@echo "  $$ make test"
	@echo "  Lint and run test suite"
	@echo ""
	@echo "  $$ make test-unit"
	@echo "  Run only unit tests"
	@echo ""
	@echo "  $$ make watch"
	@echo "  Watch for file changes, trigger build"
	@echo ""
