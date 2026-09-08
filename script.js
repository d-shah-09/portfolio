const links = document.querySelectorAll("nav a[href^='#']");

links.forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();

        const section = document.querySelector(this.getAttribute("href"));

        if (section) {
            section.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});
