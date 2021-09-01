// const REDIRECT_URI = "https://8000-azure-firefly-qwnrsc9s.ws-eu16.gitpod.io/index.html";
const REDIRECT_URI = "https://mlenahan.github.io/spotlite/index.html";
 
const CLIENT_ID = "c88f76e40dab4687994225268147612c";
const CLIENT_SECRET = "a634c74cd99a4b1a9f8e567bbd8a7c80";

const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";

function authorize() {
    /* This function is called when the page loads. We check if this is a redirect from Spotify.
     * If it is, we fire the handleRedirect function */
    const code = getCodeFromSearchParams();
    if (code) {
        handleRedirect(code);
        return true;
    }
    return false;
}

function getCodeFromSearchParams() {
    /* Get code from querystring parameter returned by Spotify.
     * Will return null if querystring parameter is not present */
    const urlParams = new URLSearchParams(window.location.search);
    return code = urlParams.get('code');
}

function createRequestBody(code) {
    /* Generate body to be sent with Authorization request */
    let body = "grant_type=authorization_code";
    body += "&code=" + code;
    body += "&redirect_uri=" + encodeURI(REDIRECT_URI);
    body += "&client_id=" + CLIENT_ID;
    body += "&client_secret=" + CLIENT_SECRET;
    return body;
}


function handleRedirect(code) {
    const method = "POST";
    const body = createRequestBody(code);
    const headers = new Headers();
    headers.append('Authorization', 'Basic ' + btoa(CLIENT_ID + ':' + CLIENT_SECRET));
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    fetch(TOKEN_ENDPOINT, { method, headers, body }).then(handleSuccessResponse);
}

function handleSuccessResponse(response) {
    response.json().then(handleJson);
}

function handleJson(data){
    const { access_token, refresh_token } = data;
    localStorage.setItem("access_token", access_token);
    localStorage.setItem("refresh_token", refresh_token);
}
