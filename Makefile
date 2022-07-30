.PHONY: install build dev clean help

help:
	@printf "Usage: make <command>\n"

	@printf "Commands:\n"

	@printf "\t install \t"
	@printf "\t Install dependencies using NPM.\n"

	@printf "\t build \t\t"
	@printf "\t Build production website in dist directory.\n"

	@printf "\t dev \t\t"
	@printf "\t Start development server.\n"

	@printf "\t clean \t\t"
	@printf "\t Cleanup generated files.\n"

	@printf "\t help \t\t"
	@printf "\t Display this help message.\n"

install: node_modules

node_modules:
	npm install

build: install
	npm run build

dev: install
	npm run dev

clean:
	rm -rf dist node_modules
