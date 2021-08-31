// Returns parsed track information.

function parseTrack(track) {
    console.log(track)
    const album = track.album;
    const image = album.images.find((image) => {
        return image.width === 300;
    })
    const url = image.url || '';
    const songTitle = track.name;
    const artistName = track.artists[0].name;
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
