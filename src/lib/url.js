export function get_url_payload(url) {

    const source = get_source(url)

    const type_info = get_type(source, url)

    return {
        url,
        source,
        ...type_info
    }
}

function get_source(url) {
    /**
     * Parse URL to deduce source website.
     *
     * Returns:
     *      string: "youtube" | "spotify" | null
     */

    let source = null

    const websites = [
        {
            name: "youtube",
            regex: /(youtube)|(youtu[.]be)/i
        },
        {
            name: "spotify",
            regex: /spotify/i
        }
    ]

    for (const website of websites) {
        const found = url.match(website.regex)
        if (found) {
            source = website.name
            break
        }
    }

    return source
}

function get_type(source, url) {
    /**
     * Get exact type of URL.
     * 
     * YouTube URL may be a channel, video, playlist.
     * Spotify URL may be a track, artist, album etc.
     */
    const websites = {
        "youtube": get_type_yt,
        "spotify": get_type_sptfy
    }

    return websites[source](url)
}

function get_type_yt(url) {
    /**
     * Parse YouTube URL to deduce if it is a video, playlist or channel.
     * 
     * For each, parse additional information like video ID, channel name etc.
     */

    let type_info = { type: null }

    const types = [
        {
            name: "playlist",
            regex: /list=/i,
            more_info: get_yt_pllst_info
        },
        {
            name: "video",
            regex: /(embed)|([/]v[/])|(v=)/i,
            more_info: get_yt_vid_info
        },
        {
            name: "channel",
            regex: /([/]channel[/])|([/]user[/])|([/]c[/])/i,
            more_info: get_yt_chnl_info
        }
    ]

    for (const type of types) {
        const found = url.match(type.regex)
        if (found) {

            const more_info_func = type.more_info
            const more_info = more_info_func(url)

            type_info = {
                type: type.name,
                ...more_info
            }

            break
        }
    }

    return type_info
}

function get_yt_pllst_info(url) {
    /** TODO
     * Parse URL of YouTube playlist to get its ID.
     */
    return { yt_pllst_id: "dummy_pllst_id" }
}

function get_yt_vid_info(url) {
    /** TODO
     * Parse URL of YouTube video to get its ID.
     */
    return { yt_vid_id: "dummy_vid_id" }
}

function get_yt_chnl_info(url) {
    /** TODO
     * Parse URL of YouTube channel to get its ID / username / channel name.
     */
    return { yt_chnl_id: "dummy_chnl_id" }
}

function get_type_sptfy(url) {
    /** TODO
     * Parse Spotify URL to deduce if it is a track, album or artist.
     * 
     * For each, parse additional information like unique identifiers.
     */
    return { type: null }
}