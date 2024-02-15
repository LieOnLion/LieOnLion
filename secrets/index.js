
let getModrinthData = async function (id) {
    return await fetch(`https://api.modrinth.com/v2/project/${(id)}`).then(res => res.json()).catch(error => error);
}

async function setData (t, m1, m2) {
    let modrinth = document.getElementById(t);
    let modId1 = document.getElementById(m1).innerHTML;
    let modId2 = document.getElementById(m2).innerHTML;

    let getModrintDw1 = await getModrinthData(modId1).then(data => data.downloads);
    let getModrintDw2 = await getModrinthData(modId2).then(data => data.downloads);
    let downloadDif = await getModrintDw1 - getModrintDw2;

    const downloadFinal = async () => {
        if (downloadDif < 0) {
            modrinth.innerHTML = "behind by - " + parseFloat(Math.abs(downloadDif)).toLocaleString('en');
        } else {
            modrinth.innerHTML = "ahead by - " + parseFloat(downloadDif).toLocaleString('en');
        }
    }
    downloadFinal();

    document.getElementById(m1).innerHTML = await getModrinthData(modId1).then(data => data.title);
    document.getElementById(m2).innerHTML = await getModrinthData(modId2).then(data => data.title);
}