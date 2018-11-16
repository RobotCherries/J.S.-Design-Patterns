/*-----------------------------------------------------*/
/* ----- Vanilla JS Solution
/*-----------------------------------------------------*/
window.onload = function () {
    /*-----------------------------------------------------*/
    /* ----- Cats Object
    /*-----------------------------------------------------*/
    let cats = [
        {
            name: 'Maru',
            url: './assets/img/cat1.jpg',
            alt: 'Striped grey kitten with blue eyes sitting on the floor, looking towards the camera.',
            clicks: 604
        },
        {
            name: 'Dodo',
            url: './assets/img/cat2.jpg',
            alt: 'Grey, mostly white and orange kitten with vivid blue eyes sitting behind a staircase, looking curiously towards the camera.',
            clicks: 573
        },
        {
            name: 'Sunny & Baccio',
            url: './assets/img/cat3.jpg',
            alt: 'cat 3',
            clicks: 429
        },
        {
            name: 'Mister',
            url: './assets/img/cat4.jpg',
            alt: 'cat4',
            clicks: 325
        },
        {
            name: 'Coco',
            url: './assets/img/cat5.jpg',
            alt: 'cat5',
            clicks: 266
        },
        {
            name: 'Mirror',
            url: './assets/img/cat6.jpg',
            alt: 'cat6',
            clicks: 83
        },
        {
            name: 'Dante',
            url: './assets/img/cat7.jpg',
            alt: 'cat7',
            clicks: 109
        },
        {
            name: 'Beemo',
            url: './assets/img/cat8.jpg',
            alt: 'cat8',
            clicks: 73
        },
        {
            name: 'Lucky',
            url: './assets/img/cat9.jpg',
            alt: 'cat9',
            clicks: 45
        }
    ];
    /*-----------------------------------------------------*/
    

    /*-----------------------------------------------------*/
    /* ----- Pictures List + their functionalities
    /*-----------------------------------------------------*/
    let catsBody = document.querySelector('.js_cats');
    let img = document.querySelector('.js_mainCatImg');
    let info = document.querySelector('.js_mainCatText');    
    
    for (let x in cats) {
        
        let cat = cats[x];
        let catFig = document.createElement('figure');
        
        if(x % 2 === 0) {
            catFig.classList.add('cats__fig', 'cats__fig--left');
        } else {
            catFig.classList.add('cats__fig', 'cats__fig--right');
        }
        
        catFig.innerHTML = `
        <div class="cats__img-wrapper">
            <div class="cats__img js_catImg" style="background-image: url('${cat.url}')"></div>
        </div>
        <div class="cats__caption-wrapper">
            <figcaption class="cats__figcap">
                <div class="cats__name-wrapper">
                    <span class="cat s__name js_catName">${cat.name}</span>
                </div>
                <div class="cats__clicks-wrapper">
                    <span>&#128200;&nbsp;</span>
                    <span class="cats__clicks js_catClicks">${cat.clicks}</span>
                </div>
            </figcaption>
        </div>
        `;
        
        // Main Cat
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
            };
        })(cats));
        
    }
    /*-----------------------------------------------------*/
    

    /*-----------------------------------------------------*/
    /* ----- Page functionalities
    /*-----------------------------------------------------*/
    
    let topBtn = document.querySelector('.js_scrollTopButton');
    
    // Check if user has scrolled down
    window.onscroll = function() {
        let d = document.documentElement;
        let offset = d.scrollTop + window.innerHeight;
        let height = d.offsetHeight;
        
        console.log(offset + ' ' + innerHeight);
      
        if(offset >= 1300) {
            topBtn.style.display = 'block';
            if (offset === height) {
                console.log('At the bottom');
                topBtn.classList.add('anim-scroll-top');
            }
        } else {
            topBtn.style.display = 'none';
        }
      };

    topBtn.addEventListener('click', () => {
        window.scrollTo(0, 0);
        this.classList.remove('anim-scroll-top');
    });
    /*-----------------------------------------------------*/
}
/*-----------------------------------------------------*/


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