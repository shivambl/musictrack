export function get_metadata(url_payload) {
    /**
     * Get metadata for URL. One URL can identify - a song, an album or
     * an artist (band or person).
     * 
     * Metadata common to all:
     *      name:   Name of song / album / artist.
     *      thmbnl: Thumbnail image. Album art for song / album;
     *              representative image for artist.
     * 
     * Song specific metadata:
     *      artist: Name of artist.
     * 
     * Album specific metadata:
     *      artist: Name of artist.
     * 
     * Artist specific metadata:
     *      -
    */

    const sources = {
        "youtube": get_metadata_yt,
        "spotify": get_metadata_sptfy,
    }

    const metadata = sources[url_payload.source](url_payload)

    return metadata
}

function get_metadata_yt(url_payload) {
    /**
     * A YouTube URL may identify a video, channel or playlist.
     * 
     * Video may be:
     *      - Song, or
     *      - Album
     * Since additional metadata needed for both is the same,
     * ambiguity is not an issue.
     * 
     * Playlist is album.
     * 
     * Channel is artist.
     */
    const types = {
        "video": get_metadata_yt_vid,
        "playlist": get_metadata_yt_pllst,
        "channel": get_metadata_yt_chnl,
    }

    return types[url_payload.type](url_payload)
}

function get_metadata_yt_vid(url_payload) {
    /** TODO
     * Get name, artist, thumbnail of YouTube video.
     */

    const title = "Dummy Artist - Dummy song / album name"

    return {
        name: "dummy song / album name",
        thmbnl: "dummy YT thumbnail",
        artist: "dummy YT artist",
    }
}

function get_metadata_yt_pllst(url_payload) {
    /** TODO
     * Get name, artist, thumbnail of YouTube playlist.
     */

    const title = "Dummy Artist - Dummy album name"

    return {
        name: "dummy album name",
        thmbnl: "dummy YT thumbnail",
        artist: "dummy YT artist",
    }
}

function get_metadata_yt_chnl(url_payload) {
    /** TODO
     * Get name, thumbnail of YouTube channel.
     */

    const title = "Dummy Artist"

    return {
        name: "dummy artist name",
        thmbnl: "dummy YT thumbnail",
    }
}

function get_metadata_sptfy(url_payload) {
    /** TODO
     * A Spotify URL identifies a track, album or artist.
     */

    return {
        name: "dummy song / album / artist name",
        thmbnl: "dummy spotify thumbnail",
        artist: "dummy artist name"
    }
}