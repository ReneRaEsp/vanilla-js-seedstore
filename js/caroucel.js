//Declarations
let slide1 = document.querySelector('.slide1');
let slide2 = document.querySelector('.slide2');
let slide3 = document.querySelector('.slide3');
let text1 = document.querySelector('.text1');
let text2 = document.querySelector('.text2');
let text3 = document.querySelector('.text3');
let count = 0;
//Functions
text3.firstElementChild.style.transform = 'opacity:1';
function goForward(){
    text1.style.opacity = '0';
    text2.style.opacity = '0';
    text3.style.opacity = '0';
    switch (count) {
        case 0:
            slide3.style.display = 'none';
            slide2.style.display = 'flex';
            slide1.style.display = 'none';
            count++;
            break;
        case 1:
            slide3.style.display = 'flex';
            slide2.style.display = 'none';
            slide1.style.display = 'none';
            count++;
            break;
        case 2:
            slide3.style.display = 'none';
            slide2.style.display = 'none';
            slide1.style.display = 'flex';
            count = 0;
            break;
    }
    setTimeout(()=>{
        text1.style.opacity = '1';
        text2.style.opacity = '1';
        text3.style.opacity = '1';
    }, 500);
}
function goBack(){
    text1.style.opacity = '0';
    text2.style.opacity = '0';
    text3.style.opacity = '0';
    switch (count) {
        case 0:
            slide3.style.display = 'flex';
            slide2.style.display = 'none';
            slide1.style.display = 'none';
            count = 2;
            break;
        case 1:
            slide3.style.display = 'none';
            slide2.style.display = 'none';
            slide1.style.display = 'flex';
            count--;
            break;
        case 2:
            slide3.style.display = 'none';
            slide2.style.display = 'flex';
            slide1.style.display = 'none';
            count--;
            break;
    }
    setTimeout(()=>{
        text1.style.opacity = '1';
        text2.style.opacity = '1';
        text3.style.opacity = '1';
    }, 500);
}

const caroucelAutomatic = ()=>{
    text1.style.opacity = '0';
    text2.style.opacity = '0';
    text3.style.opacity = '0';    
        switch (count) {
            case 0:
                slide3.style.display = 'none';
                slide2.style.display = 'flex';
                slide1.style.display = 'none';                
                count++;
                break;
            case 1:
                slide3.style.display = 'flex';
                slide2.style.display = 'none';
                slide1.style.display = 'none';
                count++;
                break;
            case 2:
                slide3.style.display = 'none';
                slide2.style.display = 'none';
                slide1.style.display = 'flex';
                count = 0;
                break;
        }
    setTimeout(()=>{
        text1.style.opacity = '1';
        text2.style.opacity = '1';
        text3.style.opacity = '1';     
    }, 500);
    
};
//Calls
setInterval(()=>{
    caroucelAutomatic();
}, 3500);



