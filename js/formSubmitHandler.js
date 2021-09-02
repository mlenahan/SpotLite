const RECOMMENDATIONS_ENDPOINT = "https://api.spotify.com/v1/recommendations";
const SEARCH_ENDPOINT = "https://api.spotify.com/v1/search";

function parseForm(form) {
    /* Gets values from form and renames for querystring parameters */
    const artist = form.elements.artistname.value;
    const songName = form.elements.songname.value;
    const seed_genres = form.elements.genre.value;

    return {
        artist,
        songName,
        seed_genres
    };
}

// eslint-disable-next-line no-unused-vars
function getHandleRecommendationsFormSubmit(setLoading, handleSuccess, handleUnauthorized, handleError) {

    async function handleRecommendationsFormSubmit(e) {
        // Default behaviour of form submit event is to reload page. Prevent this.
        e.preventDefault();
        // e.target refers to the element that fired the submit event, i.e. the form element.
        const form = e.target;
        const { artist, songName, seed_genres } = parseForm(form);

        // headers are passed with request. We need authorisation header (token) to authenticate with Spotify.
        const headers = new Headers();
        const token = window.localStorage.getItem("access_token");
        const Authorization = "Bearer " + token;
        headers.append("Authorization", Authorization);

        // call the url with headers
        setLoading();

        async function getArtistIdFromSearch(artistSearchQuery) {
            /* Call the Spotify search endpoint with the given query.
             * If request is successful return ID of first artist. Otherwise handle errors. */
            const artistRequestOptions = { q: artistSearchQuery, type: "artist", limit: 1 };
            const artistSearchParams = new URLSearchParams(artistRequestOptions).toString();
            const artistRequestFullUrl = SEARCH_ENDPOINT + "?" + artistSearchParams;

            const response = await fetch(artistRequestFullUrl, { headers });
            if (response.status === 401) handleUnauthorized();
            if (response.status === 400) handleError();
            const data = await response.json();
            return data.artists.items[0].id;
        }

        async function getTrackIdFromSearch(trackSearchQuery) {
            /* Call the Spotify search endpoint with the given query.
             * If request is successful return ID of first track. Otherwise handle errors. */
            const trackRequestOptions = { q: trackSearchQuery, type: "track", limit: 1 };
            const trackSearchParams = new URLSearchParams(trackRequestOptions).toString();
            const trackRequestFullUrl = SEARCH_ENDPOINT + "?" + trackSearchParams;

            const response = await fetch(trackRequestFullUrl, { headers });
            if (response.status === 401) handleUnauthorized();
            if (response.status === 400) handleError();
            const data = await response.json();
            return data.tracks.items[0].id;
        }

        // Call the async functions above to get artistId and trackId from search strings
        const artistId = await getArtistIdFromSearch(artist);
        const trackId = await getTrackIdFromSearch(songName);

        // Pass artistId, trackId, and genre to recommendations endpoint to get recommendations and pass returned data to handleSuccess
        const recommendationsData = { seed_artists: artistId, seed_tracks: trackId, seed_genres };
        const searchParams = new URLSearchParams(recommendationsData).toString();
        const recommendationsFullUrl = RECOMMENDATIONS_ENDPOINT + "?" + searchParams;
        fetch(recommendationsFullUrl, { headers }).then((response) => {
            if (response.status === 401) handleUnauthorized();
            if (response.status === 400) handleError();
            if (response.status === 200) response.json().then(handleSuccess);
        });
    }

    return handleRecommendationsFormSubmit;
}