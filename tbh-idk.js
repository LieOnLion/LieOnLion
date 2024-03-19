let header = document.getElementsByClassName("header");
let headerFile = "/LieOnLion/stuff/header.html";

let footer = document.getElementsByClassName("footer");
let footerFile = "/LieOnLion/stuff/footer.html";

const loadHeader = () => {
    console.info(header)

    fetch(`${headerFile}`).then(res => {
        if (res.ok) {
            return res.text();
        }
    }).then(html => {
        header[0].innerHTML = html;
    })
}
loadHeader();

const loadFooter = () => {
    fetch(`${footerFile}`).then(res => {
        if (res.ok) {
            return res.text();
        }
    }).then(html => {
        footer[0].innerHTML = html;
    })
}
loadFooter();