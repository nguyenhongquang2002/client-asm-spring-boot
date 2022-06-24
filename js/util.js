var API_URL = 'https://asm-spring-boott.herokuapp.com/api/v1/roads';

function getParameterFromUrl(name){
    var url_string = window.location.href;
    var url = new URL(url_string);
    return url.searchParams.get(name);
}