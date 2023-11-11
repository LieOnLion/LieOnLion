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

let getCurseforgeData = async function (id) {
    return await fetch(`https://api.curseforge.com/v1/mods/${(id)}`).then(res => res.json()).catch(error => error);
}

async function setData (md, cf) {
    let modrinth = document.getElementById("modrinth");
    let curseForge = document.getElementById("curseforge");

    let getModrintDw = await getModrinthData(md).then(data => data.downloads);
    modrinth.innerHTML = parseFloat(getModrintDw).toLocaleString('en');
    let getCurseforgeDw = await getCurseforgeData(cf).then(data => data.downloads);
    curseForge.innerHTML = `${getCurseforgeDw}`;
}