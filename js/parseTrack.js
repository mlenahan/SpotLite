function parseTrack(track) {
    const album = track.album;
    const image = album.images.find((image) => {
        return image.width === 300;
    })
    const url = image.url || '';
    const songTitle = track.name;
    const artistName = track.artists[0].name;
    const songDuration = millisToMinutesAndSeconds(track.duration_ms);

    return {
        songTitle,
        artistName,
        songDuration,
        url
    };
}