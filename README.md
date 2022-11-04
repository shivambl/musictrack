# musictrack

## Todos
- [ ] Use metadata in URL's `head` tag to get correct URL, title, image.

## Get started
    $ make
    Usage: make <command>
    Commands:
            install        Install NPM dependencies.
            build          Build production website in dist/ directory.
            vite-dev       Build website in dist/ directory and watch for changes.
            wrangler-dev   Serve website from dist/ dir, and simulate CF Workers.
            clean          Cleanup generated files.
            help           Display this help message.

## Goals

### v1.0
- Add tracks, albums, artists via URLs.
- Support YouTube, Spotify links.
- View added music in a grid.
- Each item has name, artwork.
- Click item to go to the URL.

## References
- [Svelte reference](https://svelte.dev/docs>)
- [Svelte guide](https://svelte.dev/tutorial)
- [Cloudflare Workers for Pages](https://developers.cloudflare.com/pages/platform/functions)
