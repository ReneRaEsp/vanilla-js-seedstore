//Declarations
const gallery1 = document.getElementById('gallery-1');
const gallery2 = document.getElementById('gallery-2');
const gallery3 = document.getElementById('gallery-3');
const seeds = document.getElementById('seeds');
const plants = document.getElementById('plants');
const services = document.getElementById('services');
//Functions
const showGallery2 = ()=>{
    gallery1.style.display = 'none';
    gallery2.style.display = 'flex';
    gallery3.style.display = 'none';
    seeds.style.textDecoration = 'underline';
    plants.style.textDecoration = 'none';
    services.style.textDecoration = 'none';
    seeds.style.background = '#fff';
    plants.style.background = '#1297a8a2';
    services.style.background = '#1297a8a2';
    seeds.style.color = '#1297a8a2';
    plants.style.color = '#fff';
    services.style.color = '#fff';
};

const showGallery1 = ()=>{
    gallery1.style.display = 'flex';
    gallery2.style.display = 'none';
    gallery3.style.display = 'none';
    seeds.style.textDecoration = 'none';
    plants.style.textDecoration = 'underline';
    services.style.textDecoration = 'none';
    seeds.style.background = '#1297a8a2';
    plants.style.background = '#fff';
    services.style.background = '#1297a8a2';
    seeds.style.color = '#fff';
    plants.style.color = '#1297a8a2';
    services.style.color = '#fff';
};

const showGallery3 = ()=>{
    gallery1.style.display = 'none';
    gallery2.style.display = 'none';
    gallery3.style.display = 'flex';
    seeds.style.textDecoration = 'none';
    plants.style.textDecoration = 'none';
    services.style.textDecoration = 'underline';
    seeds.style.background = '#1297a8a2';
    plants.style.background = '#1297a8a2';
    services.style.background = '#fff';
    seeds.style.color = '#fff';
    plants.style.color = '#fff';
    services.style.color = '#1297a8a2';
};