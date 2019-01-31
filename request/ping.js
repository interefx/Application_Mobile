var intervalId;

function ping(url) {
    var req = new XMLHttpRequest();
    req.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            ping(url);
            info = JSON.parse(req.responseText)["token"];
            if (info["module"]) {
                // Do Something
            }
        } else if (this.readyState == 4) {
            token = null;
            clearInterval(intervalId);
        }
    }
    req.open("GET", url + '/ping?token=' + token, false);
    req.send(null);
    console.log(req.responseText);
    PandaBridge.send(name);
}
