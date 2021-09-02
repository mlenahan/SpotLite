// Returns parsed track information.

// eslint-disable-next-line no-unused-vars
function parseTrack(track) {
    console.log(track);
    const album = track.album;
    const image = album.images.find((image) => {
        return image.width === 300;
    });
    const url = image.url || "";
    const songTitle = track.name;
    const artistName = track.artists[0].name;
    // eslint-disable-next-line no-undef
    const songDuration = millisToMinutesAndSeconds(track.duration_ms);
    const songLink = track.external_urls.spotify;

    return {
        songTitle,
        artistName,
        songDuration,
        url,
        songLink
    };
}
