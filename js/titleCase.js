// https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript
// eslint-disable-next-line no-unused-vars
function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}
  