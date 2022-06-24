function loadDetail(id) {
    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.onreadystatechange = function (){
        if(xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200){
            var jsonResponse = JSON.parse(xmlHttpRequest.responseText);
            document.getElementById('content').innerHTML = xmlHttpRequest.responseText;
        }
    }
    xmlHttpRequest.open('GET', API_URL + `/${id}`);
    xmlHttpRequest.send();
    // request lấy thông tin chi tiết
}

document.addEventListener('DOMContentLoaded', function (){
    var id = getParameterFromUrl('id');
    loadDetail(id);
})