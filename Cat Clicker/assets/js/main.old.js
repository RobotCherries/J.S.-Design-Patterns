/*-----------------------------------------------------*/
/* ----- Vanilla JS Solution
/*-----------------------------------------------------*/
// window.onload = function() {
 
//     let clicks = 0;
//     let img = document.querySelector('.img');
//     img.addEventListener('click', function() {
//         console.log(clicks);
//         clicks++; 
//     });

// }

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


/*-----------------------------------------------------*/
/* ----- Vanilla JS Solution
/*-----------------------------------------------------*/
// window.onload = function () {

//     // Store cats in an object
//     let cats = [
//         {
//             name: 'Maru',
//             url: './assets/img/cat1.jpg',
//             alt: 'Striped grey kitten with blue eyes sitting on the floor, looking towards the camera.',
//             clicks: 0
//         },
//         {
//             name: 'Dodo',
//             url: './assets/img/cat2.jpg',
//             alt: 'Grey, mostly white and orange kitten with vivid blue eyes sitting behind a staircase, looking curiously towards the camera.',
//             clicks: 0
//         },
//         {
//             name: 'Sunny & Baccio',
//             url: './assets/img/cat3.jpg',
//             alt: 'cat 3',
//             clicks: 0
//         },
//         {
//             name: 'Mister',
//             url: './assets/img/cat4.jpg',
//             alt: 'cat4',
//             clicks: 0
//         },
//         {
//             name: 'Coco',
//             url: './assets/img/cat5.jpg',
//             alt: 'cat5',
//             clicks: 0
//         }
//     ];

    // let catsBody = document.querySelector('.js_cats');

    // for (let x in cats) {
    //     let cat = cats[x];
        // let katFig = `
        //     <div class="cats__img-wrapper">
        //         <img class="cats__img js_catImg" src="${cat.url}" alt="${cat.alt}">
        //     </div>
        //     <div class="cats__caption-wrapper">
        //         <figcaption class="cats__figcap">
        //             Name: <span class="cats__name js_catName">${cat.name}</span> | Clicks: <span class="cats__clicks js_catClicks">${cat.clicks}</span>
        //         </figcaption>
        //     </div>
        // `;

        // Create figure
        // catsBody.innerHTML += catFig;
        // let img = document.querySelectorAll('.js_catImg');
        // let clicks = document.querySelectorAll('.js_catClicks');


        // // Set image
        // img[x].src = cat.url;
        // // Set name
        // name[x].innerHTML = cat.name;
        // // Set clicks
        // clicks[x].innerHTML = cat.clicks;
        // // Set onclick event
        // img[x].onclick = function(ind) {
        //     console.log(cat.clicks);
        //     cat.clicks++;
        //     clicks[x].innerHTML = cat.clicks;
        //     alert(x);
        // };
//     }
// }

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