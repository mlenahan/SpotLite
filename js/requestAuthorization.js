const REDIRECT_URI = "https://8000-azure-firefly-qwnrsc9s.ws-eu16.gitpod.io/index.html";
// const REDIRECT_URI = "https://mlenahan.github.io/spotlite/index.html";
const CLIENT_ID = "c88f76e40dab4687994225268147612c";
const AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";

// eslint-disable-next-line no-unused-vars
function requestAuthorization() {

    let url = AUTHORIZE_ENDPOINT;
    url += "?client_id=" + CLIENT_ID;
    url += "&response_type=token";
    url += "&scope=user-read-email,user-read-private";
    url += "&redirect_uri=" + encodeURI(REDIRECT_URI);
    window.location.href = url; // Show Spotify's authorization screen
}