$(function() {

    let model = {
        init: () => {
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
            
            if(!localStorage.cats) {
                // localStorage.cats = JSON.stringify([]);
                localStorage.setItem('cats', JSON.stringify(cats));
            }
        },
        
        getAllCats: () => {
            return JSON.parse(localStorage.cats);

        },
        
        updateCatClicks: () => {

        }
    };
    let octopus = {
        getCatList: () => {
            return model.getAllCats();
        },

        init: () => {
            // console.log(octopus.getCatList());
            model.init();
            view.init();
        }
    };
    let view = {
        init: () => {
            view.render();
        },

        render: () => {
            let catsBody = document.querySelector('.js_cats');
            let img = document.querySelector('.js_mainCatImg');
            let mainCatName = document.querySelector('.js_mainCatName');    
            let mainCatClicks = document.querySelector('.js_mainCatClicks');    
            
            let catsList = octopus.getCatList();

            // For each cat in catsList render cat block
            for (let x in catsList) {
        
                let cat = catsList[x];
                let catFig = document.createElement('figure');
                
                // Add left/right classes to cut margins from the list's cat blocks
                if(x % 2 === 0) {
                    catFig.classList.add('cats__fig', 'cats__fig--left');
                } else {
                    catFig.classList.add('cats__fig', 'cats__fig--right');
                }
                
                // Create cat block
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
                
                // Selected Cat
                catsBody.appendChild(catFig);
                img.style.backgroundImage = 'url(' + cat.url + ')';
                mainCatName.textContent = cat.name;
                mainCatClicks.textContent = cat.clicks;
                
                // On click get cat's index
                catFig.addEventListener('click', (function (catIndex) {
                    let cat = catIndex[x];
                    let clicks = document.querySelectorAll('.js_catClicks');

                    return function () {
                        // Then Increment the cat's clicks
                        cat.clicks++;
                        clicks[x].innerHTML = cat.clicks;
                        // console.log(catsList[x]);
                        localStorage.setItem('cats', JSON.stringify(catsList));
                        // And replace selected cat's info with the clicked one
                        img.style.backgroundImage = 'url(' + cat.url + ')';
                        mainCatName.textContent = cat.name;
                        mainCatClicks.textContent = cat.clicks;
                    };
                })(catsList));
            }
        }
    };

    octopus.init();
});