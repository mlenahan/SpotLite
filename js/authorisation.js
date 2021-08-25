var REDIRECT_URI = "https://8000-azure-firefly-qwnrsc9s.ws-eu16.gitpod.io/recommendations.html";
 

const CLIENT_ID = "c88f76e40dab4687994225268147612c";
const CLIENT_SECRET = "a634c74cd99a4b1a9f8e567bbd8a7c80";

const AUTHORIZE = "https://accounts.spotify.com/authorize"
const TOKEN = "https://accounts.spotify.com/api/token";

function getCodeFromSearchParams() {
    /* Get code from querystring parameter returned by Spotify.
     * Will return null if querystring parameter is not present */
    const urlParams = new URLSearchParams(window.location.search);
    return code = urlParams.get('code');
}

function onPageLoad() {
    /* This function is called when the page loads. We check if this is a redirect from Spotify.
     * If it is, we fire the handleRedirect function */
    const code = getCodeFromSearchParams();
    if (code) {
        handleRedirect(code);
    }
}

function createRequestBody(code) {
    /* Generate body to be sent with Authorization request */
    const body = "grant_type=authorization_code";
    body += "&code=" + code;
    body += "&redirect_uri=" + encodeURI(REDIRECT_URI);
    body += "&client_id=" + CLIENT_ID;
    return body;
}

function handleRedirect(code) {
    fetchAccessToken(code);

    const method = "POST";
    const body = createRequestBody(code);

    const headers = new Headers();
    headers.append('Authorization', 'Basic ' + btoa(CLIENT_ID + ':' + CLIENT_SECRET));
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    fetch(fullUrl, { method, headers, body });

    window.history.pushState("", "", REDIRECT_URI); // remove param from url
}

function fetchAccessToken(code) {
    let body = "grant_type=authorization_code";
    body += "&code=" + code;
    body += "&redirect_uri=" + encodeURI(REDIRECT_URI);
    body += "&client_id=" + CLIENT_ID;
    callAuthorizationApi(body);
}

function callAuthorizationApi(body) {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", TOKEN, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.setRequestHeader('Authorization', 'Basic ' + btoa(CLIENT_ID + ':' + CLIENT_SECRET));
    xhr.send(body);
    xhr.onload = handleAuthorizationResponse;
}

function refreshAccessToken() {
    refresh_token = localStorage.getItem("refresh_token");
    let body = "grant_type=refresh_token";
    body += "&refresh_token=" + refresh_token;
    body += "&client_id=" + client_id;
    callAuthorizationApi(body);
}

function handleAuthorizationResponse() {
    if (this.status == 200) {
        var data = JSON.parse(this.responseText);
        console.log(data);
        var data = JSON.parse(this.responseText);
        if (data.access_token != undefined) {
            access_token = data.access_token;
            localStorage.setItem("access_token", access_token);
        }
        if (data.refresh_token != undefined) {
            refresh_token = data.refresh_token;
            localStorage.setItem("refresh_token", refresh_token);
        }
        onPageLoad();
    }
    else {
        console.log(this.responseText);
        alert(this.responseText);
    }
}

function requestAuthorization() {

    const client_id = "c88f76e40dab4687994225268147612c";
    let url = AUTHORIZE;
    url += "?client_id=" + client_id;
    url += "&response_type=code";
    url += "&redirect_uri=" + encodeURI(REDIRECT_URI);
    url += "&show_dialog=true";
    url += "&scope=user-read-private user-read-email user-modify-playback-state user-read-playback-position user-library-read streaming user-read-playback-state user-read-recently-played playlist-read-private";
    window.location.href = url; // Show Spotify's authorization screen
}

function callApi(method, url, body, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Authorization', 'Bearer ' + access_token);
    xhr.send(body);
    xhr.onload = callback;
}

function removeAllItems(elementId) {
    let node = document.getElementById(elementId);
    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }
}
