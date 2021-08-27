function createRecommendations() {
    const newSongsTitleEL = document.createElement('h1');
    newSongsTitleEL.innerText = newSongsTitle;

    const fillFormEl = document.createElement('h2');
    fillFormEl.innerText = fillForm;

    // Artist Elements
    const artistLabelEl = document.createElement('label');
    artistLabelEl.setAttribute('for', 'artist');
    artistLabelEl.innerText = artistLabel;

    const artistInputEl = document.createElement('input');
    artistInputEl.setAttribute('type', 'text');
    artistInputEl.setAttribute('id', 'artist');
    artistInputEl.setAttribute('name', 'artistname');
    artistInputEl.setAttribute('placeholder', 'Artist name..');

    // Artist Divs
    const artistLabelDiv = document.createElement('div');
    artistLabelDiv.appendChild(artistLabelEl);

    const artistInputDiv = document.createElement('div');
    artistInputDiv.appendChild(artistInputEl);

    // Song Elements
    const songLabelEl = document.createElement('label');
    songLabelEl.setAttribute('for', 'song')
    songLabelEl.innerText = songLabel;

    const songInputEl = document.createElement('input');
    songInputEl.setAttribute('type', 'text');
    songInputEl.setAttribute('id', 'song');
    songInputEl.setAttribute('name', 'songname');
    songInputEl.setAttribute('placeholder', 'Song name..');

    // Song Divs
    const songLabelDiv = document.createElement('div');
    songLabelDiv.appendChild(songLabelEl);

    const songInputDiv = document.createElement('div');
    songInputDiv.appendChild(songInputEl);

    // Genre Elements
    const genreLabelEL = document.createElement('label');
    genreLabelEL.setAttribute('for', 'genre');
    genreLabelEl.innerText = genreLabel;

    const genre = ['Techno', 'Rap', 'House'];

    const genreSelectEl = document.createElement('select');
    genreSelectEl.setAttribute('name', 'genre');
    genreSelectEl.setAttribute('id', 'genre');

    for (let i of genre) {
        const genreOption = document.createElement("option");
        genreOption.value = genre[i];
        genreOption.text = genre[i];
        genreSelectEl.appendChild(genreOption);
    }

    // Genre Divs
    const genreLabelDiv = document.createElement('div');
    genreLabelDiv.appendChild(genreLabelEl);

    const genreSelectDiv = document.createElement('div');
    genreSelectDiv.setAttribute('id', 'genre');
    genreSelectDiv.setAttribute('name', 'genre');
    genreSelectDiv.appendChild(genreSelectEl);

    // Submit button element
    const submitButtonEL = document.createElement('submit');
    submitButtonEL.setAttribute('type', 'submit');
    submitButtonEL.setAttribute('value', 'Submit')

    const submitButtonDiv = document.createElement('div');
    submitButtonDiv.appendChild(submitButtonEL);

    // Adding divs to form
    const loginForm = document.createElement('form');
    // this form probably doesn't even need a class as not being used in css?
    loginForm.classList.add('login-form'); 
    loginForm.appendChild(artistLabelDiv);
    loginForm.appendChild(artistInputDiv);
    loginForm.appendChild(songLabelDiv);
    loginForm.appendChild(songInputDiv);
    loginForm.appendChild(genreLabelDiv);
    loginForm.appendChild(genreSelectDiv);
    loginForm.appendChild(submitButtonDiv);

    const musicForm = document.createElement('div');
    musicForm.classList.add('music-form');
    musicForm.appendChild.add(newSongsTitleEL);
    musicForm.appendChild.add(fillFormEl);
    musicForm.appendChild.add(loginForm);
}
