function createMusicCard(songTitle, artistName, songDuration, songArtworkSrc, songArtworkAlt, songLink) {
    console.log(songLink)
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

    const songLinkEl = document.createElement('a');
    songLinkEl.setAttribute('href', songLink);
    songLinkEl.setAttribute('target', '_blank');
    songLinkEl.setAttribute('rel', 'noopener')
    songLinkEl.appendChild(musicCard);

    return songLinkEl;
}