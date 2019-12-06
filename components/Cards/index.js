// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles').then((response) => { build(response, -1); buildFilters(response); }).catch((error) => console.log(error)).finally(() => {});

function build(response, type) {

    document.querySelector('.cards-container').innerHTML = '';

    if (type == 0 || type == -1)
        for (const index in response.data.articles.javascript) 
            document.querySelector('.cards-container').appendChild(buildArticle(response.data.articles.javascript[index]));

    if (type == 1 || type == -1)
        for (const index in response.data.articles.bootstrap) 
            document.querySelector('.cards-container').appendChild(buildArticle(response.data.articles.bootstrap[index]));
    
    if (type == 2 || type == -1)
        for (const index in response.data.articles.technology) 
            document.querySelector('.cards-container').appendChild(buildArticle(response.data.articles.technology[index]));

    if (type == 3 || type == -1)
        for (const index in response.data.articles.jquery) 
            document.querySelector('.cards-container').appendChild(buildArticle(response.data.articles.jquery[index]));
    
    if (type == 4 || type == -1)
        for (const index in response.data.articles.node) 
            document.querySelector('.cards-container').appendChild(buildArticle(response.data.articles.node[index]));

}

function buildFilters(response) {

    document.querySelectorAll('.tab').forEach(tab => { tab.addEventListener('click', () => { build(response, tab.dataset.type); }); });

}

function buildArticle(article) {

    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');

    card.className = 'card';
    headline.className = 'headline';
    author.className = 'author';
    imgContainer.className = 'img-container';

    const img = document.createElement('img');

    const span = document.createElement('span');

    headline.innerHTML = article.headline;
    img.src = article.authorPhoto;
    span.innerHTML = article.authorName;

    imgContainer.appendChild(img);

    author.appendChild(imgContainer);
    author.appendChild(span);

    card.appendChild(headline);
    card.appendChild(author);

    return card;

}