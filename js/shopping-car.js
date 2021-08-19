//Declarations
let shoppingCar = [];
let amountCount = 0;
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
};

function agregarArticulo(e){
    e.preventDefault();
    if(e.target.classList.contains('btn')){
        console.log(e.target.parentElement);
    };
};

function addArticleToList(title_a, price_a, img_src_a, id){
    //Declarations
    //Nodes
    let card = document.createElement('div');
    let image = document.createElement('img');
    let data =  document.createElement('div');
    let article_title =  document.createElement('h3');
    let article_price = document.createElement('h2');
    let icon = document.createElement('i');
    //Text nodes
    let title = document.createTextNode(title_a);
    let price = document.createTextNode(price_a);
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
    //icon
    icon.classList.add('fas');
    icon.classList.add('fa-minus-square');
    icon.addEventListener('click', function(){
        removeArticle(id);
    });

    //Data's appends
    data.appendChild(article_title);
    data.appendChild(article_price);

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
        addArticleToList(article.name, article.price, article.img, article.id);
    });
};

function removeArticle(id){
    let articleToRemove = document.getElementById(id);
    articleToRemove.remove();
};


