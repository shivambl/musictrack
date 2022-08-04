<script>
    import AddLink from "./components/AddLink.svelte";
    import MusicGrid from "./components/MusicGrid.svelte";

    import { get_metadata } from "./lib/metadata";

    function handleAdd(e) {
        const url_payload = e.detail

        const metadata = get_metadata(url_payload)

        music_list = [...music_list, {
            ...metadata,
            ...url_payload
        }]
    }

    let music_list = [
        {
            // Example youtube song
            name: "Take me somewhere nice",
            thmbnl: "https://upload.wikimedia.org/wikipedia/en/5/58/Mogwairockaction.jpg",
            artist: "Mogwai",
            url: "https://www.youtube.com/watch?v=luM6oeCM7Yw",
            source: "youtube"
        },
        {
            // Example youtube artist
            name: "toasty digital",
            thmbnl: "https://yt3.ggpht.com/ytc/AMLnZu-_SS0BN6inBJxDYelx0FTy_utUIena4S7CdIn_=s176-c-k-c0x00ffffff-no-rj",
            url: "https://www.youtube.com/c/toastydigital",
            source: "youtube"
        },
        {
            // Example youtube album
            name: "Endless",
            thmbnl: "https://upload.wikimedia.org/wikipedia/en/1/15/Frankoceanendlessart.png",
            artist: "Frank Ocean",
            url: "https://www.youtube.com/watch?v=AHLFNoT64HQ",
            source: "youtube"
        }
    ]
</script>

<main>
    <AddLink on:add={handleAdd}/>
    <MusicGrid {music_list} />
</main>

<style>
</style>
