
/*SEARCH INPUT*/ 
const searchForm = document.querySelector(".search-form");
document.querySelector("#search-btn").onclick = () =>{
    searchForm.classList.toggle("active");
}






/*LOGIN FORM*/
const loginForm = document.querySelector(".login-form-container");
const userBtn = document.querySelector("#login-btn")
const btnCloseloginForm = document.querySelector("#close-btn-login");

userBtn.addEventListener("click", ()=>{
    loginForm.classList.toggle("active");
   
})

btnCloseloginForm.addEventListener("click", ()=>{
    loginForm.classList.remove("active");
   
})




/* HEADER TWO */
window.onscroll = () =>{
    if(window.scrollY > 80){

        searchForm.classList.remove("active");
        document.querySelector(".header .header-two").classList.add("active")
    }else{
        document.querySelector(".header .header-two").classList.remove("active")
    }
}


window.onload = () =>{
    if(window.scrollY > 80){
        document.querySelector(".header .header-two").classList.add("active")
    }else{
        document.querySelector(".header .header-two").classList.remove("active")
    }
}


/*HEART LIKE RED COLOR*/
const heartIcons = document.querySelectorAll(".fa-heart")
heartIcons.forEach(heart => heart.addEventListener("click", (e)=>{
  e.preventDefault();
  heart.classList.toggle("active");
}))




/*SLIDER INICIO*/

var swiper = new Swiper(".book-slider", {
    loop:true,
    centeredSlide:true,
    autoplay:{
        delay:5000,
        disableOnInteraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      370: {
        slidesPerView: 2,
      },
      668: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1300: {
        slidesPerView: 3,
      },
      1370: {
        slidesPerView: 4,
      },
    },
  });


  /*SLIDER DESTACADOS*/

var swiper = new Swiper(".featured-slider", {
  loop:true,
  centeredSlide:true,
  autoplay:{
      delay:5000,
      disableOnInteraction:false,
  },navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 4,
    }
  },
});





  /*SLIDER ARRIBOS*/

  var swiper = new Swiper(".arrivals-slider", {
    spaceBetween: 10,
    loop:true,
    centeredSlide:true,
    autoplay:{
        delay:4500,
        disableOnInteraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 2,
      },
      768:{
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      }
    },
  });
  
  

  
  /*SLIDER REVIEWS*/

  var swiper = new Swiper(".reviews-slider", {
    spaceBetween: 10,

    loop:true,
    centeredSlide:true,
    autoplay:{
        delay:4500,
        disableOnInteraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 2,
      },
      768:{
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      }
    },
  });
  
  
  
  


