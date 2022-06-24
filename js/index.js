function processDelete(id, e){
    e.preventDefault();
    if(confirm('Are you sure?')){
        var xmlHttpRequest = new XMLHttpRequest();
        xmlHttpRequest.onreadystatechange = function (){
            if(xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200){
                alert('Delete success!');
                window.location.reload();
            }
        }
        xmlHttpRequest.open('DELETE', API_URL + `/${id}`);
        xmlHttpRequest.send();
    }
}

function loadData() {
    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.onreadystatechange = function (){
        if(xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200){
            var jsonResponse = JSON.parse(xmlHttpRequest.responseText);
            var contentHtml = '';
            for (let i = 0; i < jsonResponse.length; i++) {
                contentHtml += `<tr>
                                    <td>${jsonResponse[i].id}</td>
                                    <td>${jsonResponse[i].city}</td>
                                    <td>${jsonResponse[i].district}</td>
                                    <td>${jsonResponse[i].ward}</td>
                                    <td>${jsonResponse[i].street}</td>
                                    <td>${jsonResponse[i].description}</td>
                                    <td>${jsonResponse[i].status}</td>
                                    <td><a href="detail.html?id=${jsonResponse[i].id}">Detail</a></td>
                                    <td><a href="edit.html?id=${jsonResponse[i].id}">Edit</a></td>
                                    <td><a href="https://www.w3schools.com/w3css/w3css_panels.asp" 
                                    data-id="${jsonResponse[i].id}" 
                                    onclick="processDelete(${jsonResponse[i].id}, event)">Delete</a></td>
                                </tr>`;
            }
            document.getElementById('datacontent').innerHTML = contentHtml;
        }
    }
    xmlHttpRequest.open('GET', API_URL);
    xmlHttpRequest.send();
}

document.addEventListener('DOMContentLoaded', function (){
    loadData();
})