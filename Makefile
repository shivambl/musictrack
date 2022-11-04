.PHONY: install build vite-dev wrangler-dev clean help

help:
	@printf "Usage: make <command>\n"

	@printf "Commands:\n"

	@printf "\t install \t"
	@printf "Install NPM dependencies.\n"

	@printf "\t build \t\t"
	@printf "Build production website in dist/ directory.\n"

	@printf "\t vite-dev \t"
	@printf "Build website in dist/ directory and watch for changes.\n"

	@printf "\t wrangler-dev \t"
	@printf "Serve website from dist/ dir, and simulate CF Workers.\n"

	@printf "\t clean \t\t"
	@printf "Cleanup generated files.\n"

	@printf "\t help \t\t"
	@printf "Display this help message.\n"

install: node_modules

node_modules:
	npm install

build: install
	npm run build

vite-dev: install
	npm run build-watch

wrangler-dev: install
	wrangler pages dev ./dist

clean:
	rm -rf dist node_modules
