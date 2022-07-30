<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    function add() {
        const cleaned_link_text = cleanLinkText(link_text)
        dispatch("add", {
            url: cleaned_link_text,
        });
        link_text = ""
    }

    function cleanLinkText(unclean_link) {
        // TODO: Clean URL
        return unclean_link
    }

    let link_text = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

</script>

<input type="text" bind:value={link_text} />
<button on:click={add}>
    Add
</button>
