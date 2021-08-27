const REDIRECT_URI = "https://8000-azure-firefly-qwnrsc9s.ws-eu16.gitpod.io/index.html";
const CLIENT_ID = "c88f76e40dab4687994225268147612c";
const AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize"

function requestAuthorization() {

    let url = AUTHORIZE_ENDPOINT;
    url += "?client_id=" + CLIENT_ID;
    url += "&response_type=code";
    url += "&redirect_uri=" + encodeURI(REDIRECT_URI);
    url += "&show_dialog=true";
    url += "&scope=user-read-private user-read-email user-modify-playback-state user-read-playback-position user-library-read streaming user-read-playback-state user-read-recently-played playlist-read-private";
    window.location.href = url; // Show Spotify's authorization screen
}
