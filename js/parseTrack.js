function parseTrack(track) {
    console.log(track)
    const songTitle = track.name;
    const artistName = track.artists[0].name;
    const songDuration = millisToMinutesAndSeconds(track.duration_ms);

    return {
        songTitle,
        artistName,
        songDuration
    };
}