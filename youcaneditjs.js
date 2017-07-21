// SLECTORS
var productName = document.getElementsByTagName("h4")[0].innerHTML;
var table = document.querySelectorAll('body > div > table > tbody > tr > td');
var session = document.getElementById("session_id").getAttribute("value");
var btn = document.getElementsByTagName("input")[1];
var respArea = document.getElementsByTagName("textarea")[0];

// STRINGFY
var specifications = '';
for (var i = 0, len = table.length; i < table.length; i++) {
    len == (i+1) ? specifications += table[i].innerHTML : specifications += table[i].innerHTML + '||';
}

// AJAX
btn.addEventListener('click', function() {
    xhr = new XMLHttpRequest();
    var url = "app.php?product=" + 
        encodeURIComponent(productName) + "&specifications=" + 
        encodeURIComponent(specifications) + "&sessionId=" + 
        encodeURIComponent(session);
    xhr.open("GET", url, true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            respArea.innerHTML = xhr.responseText;
        }
    }
    xhr.send();
});