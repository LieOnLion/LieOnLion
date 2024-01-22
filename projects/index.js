function loadHTML() {
    let xhttp;
    let element = document.getElementById("mod-desc");
    let file = "desc.html";

    if ( file ) {
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4) {
                if (this.status == 200) {element.innerHTML = this.responseText;}
                if (this.status == 404) {element.innerHTML = "<h1>404 Page not found.</h1>";}
            }
        }
        xhttp.open("GET", `${file}`, true);
        xhttp.send();
        return;
    }
}

let getModrinthData = async function (id) {
    return await fetch(`https://api.modrinth.com/v2/project/${(id)}`).then(res => res.json()).catch(error => error);
}

async function setData () {
    let modrinth = document.getElementById("modrinth");
    let modId = document.getElementById("mod-id").innerHTML;

    let getModrintDw = await getModrinthData(modId).then(data => data.downloads);
    modrinth.innerHTML = parseFloat(getModrintDw).toLocaleString('en');
    console.log(document.getElementById("mod-id").innerHTML)
}