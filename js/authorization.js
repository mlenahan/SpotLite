const REDIRECT_URI = "https://8000-azure-firefly-qwnrsc9s.ws-eu16.gitpod.io/index.html";
// const REDIRECT_URI = "https://mlenahan.github.io/spotlite/index.html";
 
const CLIENT_ID = "c88f76e40dab4687994225268147612c";

const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";

function authorize() {
    /* This function is called when the page loads. We check if this is a redirect from Spotify.
     * If it is, we access the hash fragment to get access token */
    const accessToken = getAccessTokenFormHashFragment();
    if(accessToken) {
      localStorage.setItem("access_token", access_token);
      return true;
    }
    return false;
}

function getAccessTokenFormHashFragment() {
    /* Get code from querystring parameter returned by Spotify.
     * Will return null if querystring parameter is not present */
    if(window.location.hash) {
      var hash = window.location.hash.substring(1); //Puts hash in variable, and removes the # character
      const hashParams = new URLSearchParams(hash);
      const access_token = hashParams.get("access_token");
      localStorage.setItem("access_token", access_token);
    }
}