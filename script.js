window.addEventListener("load", function () {

    var menu = document.querySelector(".side_menu");
    var ham = document.querySelector(".ham");
    var close = document.querySelector(".close");
    // var xIcon = document.querySelector(".xIcon");
    // var menuIcon = document.querySelector(".menuIcon");
    var headerShade = document.querySelector(".header_shade");
    var body = document.querySelector("body");

    ham.addEventListener("click", toggleMenu);
    close.addEventListener("click", closeMenu);

    function toggleMenu() {
        if (menu.classList.contains("show_side_menu")) {
            menu.classList.remove("show_side_menu");
            // xIcon.style.display = "none";
            // menuIcon.style.display = "block";
            headerShade.style.opacity = "0";
            headerShade.style.visibility = "hidden";
            body.style.overflow = "auto";
        } else {
            menu.classList.add("show_side_menu");
            // xIcon.style.display = "block";
            // menuIcon.style.display = "none";
            headerShade.style.opacity = "1";
            headerShade.style.visibility = "visible";
            body.style.overflow = "hidden";
        }
    };

    function closeMenu() {
        headerShade.style.opacity = "0";
        headerShade.style.visibility = "hidden";
        menu.classList.remove("show_side_menu");
        body.style.overflow = "auto";
        // xIcon.style.display = "block";
        // menuIcon.style.display = "none";
    };

    var menuLinks = document.querySelectorAll(".menuLink");

    menuLinks.forEach(
        function (menuLink) {
            menuLink.addEventListener("click", toggleMenu);
            menuLink.addEventListener("click", closeMenu)
        }
    );

});

