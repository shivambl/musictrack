export async function onRequestGet({ request }) {
    const music_url = new URL(request.url).searchParams.get("url");

    return await fetch(
        "https://www.youtube.com/oembed?" + new URLSearchParams({
            "url": music_url,
            "format": "json"
        }).toString()
    )
}