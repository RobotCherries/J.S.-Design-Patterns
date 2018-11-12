/*-----------------------------------------------------*/
/* ----- Vanilla JS Solution
/*-----------------------------------------------------*/
window.onload = function () {

    // Store cats in an object
    let cats = [
        {
            name: 'Maru',
            url: './assets/img/cat1.jpg',
            alt: 'Striped grey kitten with blue eyes sitting on the floor, looking towards the camera.',
            clicks: 0
        },
        {
            name: 'Dodo',
            url: './assets/img/cat2.jpg',
            alt: 'Grey, mostly white and orange kitten with vivid blue eyes sitting behind a staircase, looking curiously towards the camera.',
            clicks: 0
        },
        {
            name: 'Sunny & Baccio',
            url: './assets/img/cat3.jpg',
            alt: 'cat 3',
            clicks: 0
        },
        {
            name: 'Mister',
            url: './assets/img/cat4.jpg',
            alt: 'cat4',
            clicks: 0
        },
        {
            name: 'Coco',
            url: './assets/img/cat5.jpg',
            alt: 'cat5',
            clicks: 0
        }
    ];

    let catsBody = document.querySelector('.js_cats');
    let img = document.querySelector('.js_mainCatImg');
    let info = document.querySelector('.js_mainCatText');    

    for (let x in cats) {

        let cat = cats[x];
        let catFig = document.createElement('figure');
        catFig.classList.add('cats__fig');

        catFig.innerHTML = `
        <div class="cats__img-wrapper">
            <img class="cats__img js_catImg" src="${cat.url}" alt="${cat.alt}">
        </div>
        <div class="cats__caption-wrapper">
            <figcaption class="cats__figcap">
                Name: <span class="cats__name js_catName">&nbsp;${cat.name}</span>&nbsp;|&nbsp;Clicks:&nbsp;<span class="cats__clicks js_catClicks">${cat.clicks}</span>
            </figcaption>
        </div>
        `;

        catsBody.appendChild(catFig);
        img.style.backgroundImage = 'url(' + cat.url + ')';
        info.innerHTML = 'Hi there, I\'m ' + cat.name + ' | My clicks: ' + cat.clicks + ' Meow!';

        catFig.addEventListener('click', (function (catIndex) {
            let cat = catIndex[x];
            let clicks = document.querySelectorAll('.js_catClicks');

            return function () {
                cat.clicks++;
                clicks[x].innerHTML = cat.clicks;
                img.style.backgroundImage = 'url(' + cat.url + ')';
                info.innerHTML = 'Hi there, I\'m ' + cat.name + ' | My clicks: ' + cat.clicks + ' Meow!';
                window.scrollTo(0, 0);
            };
        })(cats));
        
    }
}

/*-----------------------------------------------------*/
/* ----- jQuery Solution
/*-----------------------------------------------------*/
// $(document).ready(function() {

    // let clicks = 0;
    // $('.img').on('click', function catClicker() {
    //     console.log(clicks);
    //     clicks++; 
    // } );

// });