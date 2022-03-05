const promo = document.querySelector('.promo'),
    trans = document.querySelector('.trans'),
    newsletter = document.querySelector('.newsletter'),
    landing = document.querySelector('.landing'),
    urlImg1 = document.querySelector('.urlImg1'),
    urlImg2 = document.querySelector('.urlImg2'),
    urlImg3 = document.querySelector('.urlImg3'),
    urlImg4 = document.querySelector('.urlImg4');
    


    promo.addEventListener("mouseover", () => {
        urlImg1.style.display = "block"
    });

    promo.addEventListener("mouseleave", () => {
        urlImg1.style.display = ""
    });


    trans.addEventListener("mouseover", () => {
        urlImg2.style.display = "block"
    });

    trans.addEventListener("mouseleave", () => {
       urlImg2.style.display = ""
    });

    newsletter.addEventListener("mouseover", () => {
        urlImg3.style.display = "inline-block"
    });

    newsletter.addEventListener("mouseleave", () => {
       urlImg3.style.display = ""
    });
    

    landing.addEventListener("mouseover", () => {
        urlImg4.style.display = "block"
    });

    landing.addEventListener("mouseleave", () => {
       urlImg4.style.display = ""
    });








// const sliderImages = document.querySelectorAll('.slide'),
//    arrowLeft = document.querySelector('#arrow-left'),
//    arrowRight = document.querySelector('#arrow-right'),
//    current = 0;

//    //clear all images
// function reset() {
//     for(let i = 0; i < sliderImages.length; i++) {
//         sliderImages[i].style.display = 'none';
//     }
// }

// //init slider
// function startSlide(){
//     reset();
//     sliderImages[0].style.display = 'block';
// }


// //show previous slide
// function slideLeft(){
//     reset();
//     sliderImages[current - 1].style.display = 'block';
//     current--;
// }

// //show next
// function slideRight(){
//     reset();
//     sliderImages[current + 1].style.display = 'block';
//     current ++ ;
// }


// // click event
// arrowLeft.addEventListener('click', function(){
//     if(current === 0){
//        current = sliderImages.length;
//     }
//     slideLeft();

// })


// // event listener click right
// arrowRight.addEventListener('click', function(){
//     if(current === sliderImages.length - 1) {
//         current = -1;
//     }
//     slideRight();

// })



// startSlide();

