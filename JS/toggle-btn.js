(function()
{
    "use strict";

    const navbar = document.getElementById("navbar");
    const menuBtn = document.querySelector(".fa-bars");

    menuBtn.addEventListener('click', function()
    {
        navbar.classList.toggle("hidemenu");
    });
}());