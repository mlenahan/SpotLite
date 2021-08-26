function createForm() {
    const newSongsTitleEL = document.createElement('h1');
    newSongsTitleEL.innerText = newSongsTitle;

    const fillFormEl = document.createElement('h2');
    fillFormEl.innerText = fillForm;

    const artistLabelEl = document.createElement('label');
    artistLabelEl.setAttribute('for', 'artist');
    artistLabelEl.innerText = artistLabel;

    const artistInputEl = document.createElement('input');
    artistInputEl.setAttribute('type', 'text');
    artistInputEl.setAttribute('id', 'artist');
    artistInputEl.setAttribute('name', 'artistname');
    artistInputEl.setAttribute('placeholder', 'Artist name..');

    const songLabelEl = document.createElement('label');
    songLabelEl.setAttribute('for', 'song')
    songLabelEl.innerText = songLabel;

    const songInputEl = document.createElement('input');
    songInputEl.setAttribute('type', 'text');
    songInputEl.setAttribute('id', 'song');
    songInputEl.setAttribute('name', 'songname');
    songInputEl.setAttribute('placeholder', 'Song name..');

    const genreLabelEL = document.createElement('label');
    genreLabelEL.setAttribute('for', 'genre');
    genreLabelEl.innerText = genreLabel;

    const genre = ['Techno', 'Rap', 'House'];

    const genreSelectEl = document.createElement('select');
    genreSelectEl.setAttribute('name', 'genre');
    genreSelectEl.setAttribute('id', 'genre');

    for (let i of genre) {
        var genreOption = document.createElement("option");
        genreOption.value = genre[i];
        genreOption.text = genre[i];
        genreSelectEl.appendChild(genreOption);
    }

    const submitButtonEL = document.createElement('submit');
    submitButtonEL.setAttribute('type', 'submit');
    submitButtonEL.setAttribute('value', 'Submit')
}