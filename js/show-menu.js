//Declarations
const SHOW_MENU = document.getElementById('show-menu-1');
//Functions
function toggleMenu(){
    if (SHOW_MENU.style.display == 'flex'){
        SHOW_MENU.style.transform = 'translate(0px, -24px)';
        SHOW_MENU.style.opacity = '0';
        setTimeout(function(){ 
            SHOW_MENU.style.display = 'none';
            SHOW_MENU.style.opacity = '1'; }, 400);
    } else {
        SHOW_MENU.style.display = 'flex';
        SHOW_MENU.style.transform = 'translate(0px,-24px)';
        SHOW_MENU.style.opacity = '0';
        setTimeout(function(){ 
            SHOW_MENU.style.transform = 'translate(0px,24px)';
            SHOW_MENU.style.opacity = '1';
         }, 300);
    }
}