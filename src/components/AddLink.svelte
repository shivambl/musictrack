<script>
    import { createEventDispatcher } from "svelte";

    import { get_url_payload } from "../lib/url";

    const dispatch = createEventDispatcher();

    function add() {
        /**
         * Fire a dispatch with payload that contains information needed to
         * add music from the URL.
         *
         * Information needed for all URLs:
         *      url: URL entered by user. Remove unwanted query parameters
         *           and convert to standard format (expand shortened URLs etc).
         *      source: "youtube" | "spotify"
         */

        const url_payload = get_url_payload(link_text)

        dispatch("add", url_payload);

        // Clear text in input box after user clicks button to add URL.
        link_text = ""
    }

    let link_text = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

</script>

<input type="text" bind:value={link_text} />
<button on:click={add}>
    Add
</button>
