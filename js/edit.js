function loadDetail(id) {
    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.onreadystatechange = function () {
        if (xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200) {
            var jsonResponse = JSON.parse(xmlHttpRequest.responseText);
            document.getElementById('content').innerHTML
                = xmlHttpRequest.responseText;
            fillDataToForm(jsonResponse);
        }
    }
    xmlHttpRequest.open('GET', API_URL + `/${id}`);
    xmlHttpRequest.send();
    // request lấy thông tin chi tiết
}

function fillDataToForm(product) {
    var productForm = document.forms['form-edit'];
    var txtName = productForm['name'];
    var txtPrice = productForm['price'];
    var btnSubmit = productForm['submit'];
    txtName.value = product.name;
    txtPrice.value = product.price;
    btnSubmit.onclick = function (event) {// lấy dữ liệu từ form.
        if(productForm.checkValidity()) { // gọi đến hàm validate của form
            event.preventDefault();
            var obj = {
                name: txtName.value,
                price: txtPrice.value
            }
            var xmlHttpRequest = new XMLHttpRequest();
            xmlHttpRequest.onreadystatechange = function (){
                if(xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200){
                    var jsonResponse = JSON.parse(xmlHttpRequest.responseText);
                    // thông báo thành công và redirect.
                    alert('Update success!');
                    window.location.href = '/vanilla-js-client/index.html';
                }
            }
            xmlHttpRequest.open('PUT', API_URL + `/${product.id}`);
            xmlHttpRequest.setRequestHeader('Content-Type', 'application/json'); // bắt buộc phải vị trí này
            xmlHttpRequest.send(JSON.stringify(obj));
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var id = getParameterFromUrl('id');
    loadDetail(id);
})