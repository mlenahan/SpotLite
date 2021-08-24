function createMusicCard(songTitle, artistName, songDuration, songArtworkSrc, songArtworkAlt) {
    const songTitleEl = document.createElement('h2');
    songTitleEl.innerText = songTitle;

    const artistNameEl = document.createElement('h3');
    artistNameEl.innerText = artistName;

    const songDurationEl = document.createElement('span');
    songDurationEl.classList.add('song-time')
    songDurationEl.innerText = songDuration;

    const songInfo = document.createElement('div');
    songInfo.classList.add('song-info');
    songInfo.appendChild(songTitleEl);
    songInfo.appendChild(artistNameEl);
    songInfo.appendChild(songDurationEl);

    const songArtworkEl = document.createElement('img');
    songArtworkEl.setAttribute('src', songArtworkSrc);
    songArtworkEl.setAttribute('alt', songArtworkAlt);

    const musicCard = document.createElement('div');
    musicCard.classList.add('music-card');
    musicCard.appendChild(songArtworkEl);
    musicCard.appendChild(songInfo);

    return musicCard;
}