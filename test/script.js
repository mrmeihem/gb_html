window.addEventListener("load", function () {

    const burger = document.getElementById('burger');
    const ul = document.querySelector('nav ul');

    burger.addEventListener('click', () => {
        burger.classList.toggle('show-x');
        ul.classList.toggle('show');
    });

})

    // var menu = document.querySelector(".side_menu");
    // var ham = document.querySelector(".ham");
    // var close = document.querySelector(".close");
    // var headerShade = document.querySelector(".header_shade");

    // ham.addEventListener("click", toggleMenu);
    // close.addEventListener("click", closeMenu);

    // function toggleMenu() {
    //     if (menu.classList.contains("show_side_menu")) {
    //         menu.classList.remove("show_side_menu");
    //         headerShade.style.opacity = "0";
    //         headerShade.style.visibility = "hidden";
    //     } else {
    //         menu.classList.add("show_side_menu");
    //         headerShade.style.opacity = "1";
    //         headerShade.style.visibility = "visible";
    //     }
    // };

    // function closeMenu() {
    //     headerShade.style.opacity = "0";
    //     headerShade.style.visibility = "hidden";
    //     menu.classList.remove("show_side_menu");
    // };

    // var menuLinks = document.querySelectorAll(".menuLink");

    // menuLinks.forEach(
    //     function (menuLink) {
    //         menuLink.addEventListener("click", toggleMenu);
    //         menuLink.addEventListener("click", closeMenu)
    //     }
    // );