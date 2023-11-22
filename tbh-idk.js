async function loadHTML() {
    let header = document.getElementById("header");
    let headerFile = "/LieOnLion/stuff/header.html";
    let footer = document.getElementById("footer");
    let footerFile = "/LieOnLion/stuff/footer.html";

    const loadHeader = () => {
        fetch(`${headerFile}`).then(res => {
            if (res.ok) {
                return res.text();
            }
        }).then(html => {
            header.innerHTML = html;
        })
    }
    loadHeader();

    const loadFooter = () => {
        fetch(`${footerFile}`).then(res => {
            if (res.ok) {
                return res.text();
            }
        }).then(html => {
            footer.innerHTML = html;
        })
    }
    loadFooter();
}