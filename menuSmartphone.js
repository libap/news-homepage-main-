var burger = document.getElementById('burgerImg');
var menuTel = document.getElementById('listUlPhone');
var closeMenu = document.getElementById('close');


burger.addEventListener("click", showMenu);
closeMenu.addEventListener("click", hideMenu);

function showMenu(){
    console.log('Ca marche');
    menuTel.style.display = "flex";
}

function hideMenu(){
    console.log("yeahh man");
    menuTel.style.display = "none";
}