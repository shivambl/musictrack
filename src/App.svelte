<script>
    import AddLink from "./lib/AddLink.svelte";
    import MusicGrid from "./lib/MusicGrid.svelte";

    function handleAdd(e) {
        const url = e.detail.url;
        const metadata = getMetadata(url)
        music_list = [...music_list, {
            ...metadata,
            url
        }]
    }

    function getMetadata(url) {
        // TODO: Get metadata from url
        return {
            name: "Fire track 🔥🔥🔥"
        }
    }

    let music_list = [
        {
            name: "Gojira",
            url: "https://open.spotify.com/artist/0GDGKpJFhVpcjIGF8N6Ewt"
        }
    ]
</script>

<main>
    <AddLink on:add={handleAdd}/>
    <MusicGrid {music_list} />
</main>

<style>
</style>
