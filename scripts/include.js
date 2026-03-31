function loadComponent(id, file) {
    return fetch(file)
        .then(res => {
            if (!res.ok) throw new Error("Failed to load " + file);
            return res.text();
        })
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(err => {
            console.error(err);
        });
}

Promise.all([
    loadComponent("header", "./components/header.html"),
    loadComponent("footer", "./components/footer.html")
]).then(() => {
    console.log("Components loaded");

    // ✅ Initialize after header is injected
    initMobileNav();
});