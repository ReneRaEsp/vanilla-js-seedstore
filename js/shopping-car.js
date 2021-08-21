//Declarations
let shoppingCar = [];
let amountCount = 0;
let total = 0;
let articlesList = document.getElementById('articlesList');
let sh_car = document.getElementById('sh-car');
//Functions
const addToCar = (article)=>{
    let articleAdd = document.getElementById(article);
    let prepPrice = articleAdd.querySelector('.article-price').innerHTML;
    //prepPrice = parseFloat(prepPrice.substr(1));
    amountCount++;
    if(articleAdd.querySelector('.article-append')){
        let element = {
            id: article,
            name: articleAdd.querySelector('.article-title').innerHTML,
            img: articleAdd.querySelector('.article-img').src,
            price: prepPrice,
            append: articleAdd.querySelector('.article-append').innerHTML,
            amount: amountCount
    }
        shoppingCar.push(element);
    }else{
        let element = {
            id: article,
            name: articleAdd.querySelector('.article-title').innerHTML,
            img: articleAdd.querySelector('.article-img').src,
            price: articleAdd.querySelector('.article-price').innerHTML,
            amount: amountCount
    }
        shoppingCar.push(element);
    }
    clearAndListArticles();
    increaseTotal();
    renderTotal();
};

function addArticleToList(title_a, price_a, img_src_a, id, append_a){
    //Declarations
    //Nodes
    let card = document.createElement('div');
    let image = document.createElement('img');
    let data =  document.createElement('div');
    let article_title = document.createElement('h3');
    let article_price = document.createElement('h2');
    let icon = document.createElement('i');
    let article_append = document.createElement('h3');
    //Text nodes
    let title = document.createTextNode(title_a);
    let price = document.createTextNode(price_a);
    let append = document.createTextNode(append_a);
    //Attributes
    let img_src = img_src_a;
    
    //Adding atributes
    //card
    card.classList.add('card');
    //image
    image.src = img_src;
    image.classList.add('article-img');
    //data
    data.classList.add('data');
    //article-title
    article_title.classList.add('article-title');
    article_title.appendChild(title);
    //article-price
    article_price.classList.add('article-price');
    article_price.appendChild(price);
    //article-append
    append_a != undefined ? article_append.classList.add('article-append') : null;
    append_a != undefined ?  article_append.appendChild(append) : null;
    //icon
    icon.classList.add('fas');
    icon.classList.add('fa-times-circle');
    icon.addEventListener('click', function(){
        removeArticle(id);
    });

    //Data's appends
    data.appendChild(article_title);
    data.appendChild(article_price);
    append_a != undefined ? data.appendChild(article_append) : null;

    card.id = id;

    card.appendChild(image);

    card.appendChild(data);

    card.appendChild(icon);

    
    //Append div Card
    articlesList.appendChild(card);
};

function clearAndListArticles(){
    articlesList.innerHTML = '';
    shoppingCar.forEach(article=>{
        addArticleToList(article.name, article.price, article.img, article.id, article.append);
    });
};

function removeArticle(id){
    console.log('activated: ' + id);
    let articleToRemove = document.getElementById(id);
    let i = 0;
    shoppingCar.forEach(article=>{
        let price = parseInt(article.price.substr(1));
        if(article.id == id){
            console.log('match: ' + price);
            shoppingCar.splice(i, 1);
            decreaseTotal(price);
            i++;
        };
    });
    articleToRemove.remove();
    renderTotal();
};

function increaseTotal(){
    let price_a;
    shoppingCar.forEach(element=>{
        price_a = element.price;
        price_a = parseInt(price_a.substr(1));
    });
    total += price_a;
};

function decreaseTotal(price){
    total -= price;
};
function renderTotal(){
    let show_total = document.getElementById('total');
    let total_node = document.createTextNode(total);
    show_total.innerHTML = total;
};
function emptyCar(){
    total = 0;
    shoppingCar = [];
    articlesList.innerHTML = '';
    renderTotal();
}
//Event Listeners
let cards = document.querySelectorAll('.article-card');
cards.forEach(card=>{
    let id = card.id;
    card.addEventListener('click', function(){
        addToCar(id);
    });
});



