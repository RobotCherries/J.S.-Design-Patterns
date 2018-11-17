window.onload = function() {

    // Model
    var model = {
    
        currentCat: null,
        cats: [
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
        ],
    
        changed: false,
    
        init: function() {
            // store object in browser's local storage
            if(!localStorage.cats && !localStorage.currentCat) {
                // localStorage.cats = JSON.stringify([]);
                localStorage.setItem('currentCat', JSON.stringify(this.currentCat));
                localStorage.setItem('cats', JSON.stringify(this.cats));
            }
        },
    
        isChanged: function(val) {
            if(val === true) {
                // If object has changed, update local storage
                localStorage.setItem('currentCat', JSON.stringify(this.currentCat));
                localStorage.setItem('cats', JSON.stringify(this.cats));
                // Once updated, return changed back to false
                this.changed = false;
            }
            else if(val === false) {
                console.log('No changes were made.');
            } else {
                alert('An error has occurred while storing the cats. Please refresh!');
            }
    
            // console.log(this.changed);
        }
    }
    
    
    
    // Controller
    var octopus = {
        
        init: function() {
            // set our current cat to the first one in the list
            if(!localStorage.currentCat && localStorage.currentCat !== null) {
                model.currentCat = model.cats[model.cats.length-1];
                model.changed = true;
                model.isChanged(model.changed);
            } else {
                model.currentCat = JSON.parse(localStorage.currentCat);
                model.cats= JSON.parse(localStorage.cats);
            }
            // tell our views to initialize
            model.init();
            catView.init();
            catListView.init();
        },
    
        getCurrentCat: function() {
            return model.currentCat;
        },
    
        getCats: function() {
            return model.cats;
        },
    
        // set the currently selected cat to the object passed in
        setCurrentCat: (catInd) => {
            model.currentCat = catInd;
            model.changed = true;
            model.isChanged(model.changed);
        },
    
        // increment the counter for the currently selected cat
        incrementCounter: function() {
            model.currentCat.clicks++;
            model.changed = true;
            model.isChanged(model.changed);
            catListView.render();
            catView.render();
        }
    }
    
    
    
    // Selected Cat
    var catView = {
        
        init: function() {
            // store pointers to our DOM elements for easy access
            this.mainCatImg = document.querySelector('.js_mainCatImg');
            this.mainCatName = document.querySelector('.js_mainCatName');
            this.mainCatClicks = document.querySelector('.js_mainCatClicks');
            
            // on click, increment the current cat's counter
            this.mainCatImg.addEventListener('click', function() {
                octopus.incrementCounter();
            });
    
            // render this view (update the DOM elements wiht the right values)
            this.render();
        },
        
        render: function() {
            // update the DOM elements with the values from the current cat
            var currentCat = octopus.getCurrentCat();
            this.mainCatImg.style.backgroundImage = 'url(' + currentCat.url + ')';
            this.mainCatName.textContent = currentCat.name;
            this.mainCatName.textContent = currentCat.clicks;
        },
    }
    
    
    
    // List of Cats
    var catListView = {
        
        init: function() {
            // store the DOM element for easy access later
            this.catListBlock = document.querySelector('.js_catsUl');
    
            // render this view (update the DOM elements with the right values)
            catListView.render();
            catListView.scrollButton();
        },
    
        render: function() {
            var cat, elem, i;
            // get the cats we'll be rendering from the octopus
            var cats = octopus.getCats();
    
            // empty the cat list
            // this.catListBlock.innerHTML = '';
            while (this.catListBlock.firstChild) this.catListBlock.removeChild(this.catListBlock.firstChild);
    
            // Loop over all the cats
            for(var i in cats) {
                // this is the cat we're currently looping over
                let cat = cats[i];
    
                elem = document.createElement('li');
    
                // Add left/right classes to cut margins from the list's cat blocks
                if(i % 2 === 0) {
                    elem.classList.add('cats__li', 'cats__li--left');
                } else {
                    elem.classList.add('cats__li', 'cats__li--right');
                }
                
                elem.innerHTML = `
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
    
                // on click, setCurrentCat and render the catView
                // (this uses our closure-in-a-loop trick to connect the value)
                // of the cat variable to the click event function
                elem.addEventListener('click', (function(catCopy) {
                    return function() {
                        octopus.incrementCounter();
                        octopus.setCurrentCat(catCopy);
                        catView.render();
                    }
                })(cat));
                
                // finally, add the element to the list
                this.catListBlock.appendChild(elem);
            }
        },
        
        scrollButton: function() {
            let topBtn = document.querySelector('.js_scrollTopButton');
    
            // Check if user has scrolled down
            window.onscroll = function() {
                let d = document.documentElement;
                let offset = d.scrollTop + window.innerHeight;
                let height = d.offsetHeight;
                // console.log(offset + ' ' + innerHeight);
                
                if (offset === height) {
                    console.log('At the bottom');
                    topBtn.classList.add('anim-scroll-top');
                }
            };
        
            // On click scroll to the top of the page
            topBtn.addEventListener('click', () => {
                window.scrollTo(0, 0);
                topBtn.classList.remove('anim-scroll-top');
            });
        }
    }
    
    
    
    // Initialize the octopus
    octopus.init();
}
