async function loadInfo( numberType ) {
    let header = document.getElementById("header");
    let headerFile = "/LieOnLion/stuff/header.html";
    let footer = document.getElementById("footer");
    let footerFile = "/LieOnLion/stuff/footer.html";
    let footer1File = "/LieOnLion/stuff/footer1.html";

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
        if ( numberType === 1 ) {
            fetch(`${footer1File}`).then(res => {
                if (res.ok) {
                    return res.text();
                }
            }).then(html => {
                footer.innerHTML = html;
            })
        } else {
            fetch(`${footerFile}`).then(res => {
                if (res.ok) {
                    return res.text();
                }
            }).then(html => {
                footer.innerHTML = html;
            })
        }
    }
    loadFooter();
}

loadInfo();