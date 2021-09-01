function parseForm(form) {
    /* Gets values from form and renames for querystring parameters */
    const seed_artists = form.elements['artistname'].value;
    const seed_tracks = form.elements['songname'].value;
    const seed_genres = form.elements['genre'].value;

    return {
        seed_artists,
        seed_tracks,
        seed_genres
    };
}

function getHandleRecommendationsFormSubmit(setLoading, handleSuccess, handleUnauthorized, handleError) {

    function handleRecommendationsFormSubmit(e) {
        // Default behaviour of form submit event is to reload page. Prevent this.
        e.preventDefault(); 
        // e.target refers to the element that fired the submit event, i.e. the form element.
        const form = e.target;
        const formData = parseForm(form);

        const recommendationsEndpoint = 'https://api.spotify.com/v1/recommendations';
        // convert form data to query string parameters, e.g. 
        // seed_artists=skepta&seed_tracks=shutdown&seed_genres=rap
        const searchParams = new URLSearchParams(formData).toString();
        const fullUrl = recommendationsEndpoint + '?' + searchParams;

        // headers are passed with request. We need authorisation header (token) to authenticate with Spotify.
        const headers = new Headers();
        const token = window.localStorage.getItem('access_token');
        const Authorization = 'Bearer ' + token;
        headers.append('Authorization', Authorization);

        // call the url with headers
        setLoading();
        return fetch(fullUrl, {
            headers
        }).then((response) => {
            if (response.status === 401) {
                handleUnauthorized();
            }
            if (response.status === 400) {
                handleError();
            }
            if (response.status === 200) {
                response.json().then(handleSuccess);
            }
        });
    }

    return handleRecommendationsFormSubmit;
}
