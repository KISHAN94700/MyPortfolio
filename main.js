
// Header Scroll
let nav = document.querySelector(".header_wrapper");
window.onscroll = function () {
    if(document.documentElement.scrollTop > 20){
        console.log("header scrolled");
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
        console.log("header remove")
    }
}

// nav hide 
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})

function myFunc(){
    document.getElementById("myForm").reset();
}

// about section image animation

let aboutPoster = document.querySelector(".image-scroll");

let scale = 0.3;
const maxScale = 1.2;
function handleScroll() {
    
    scale = 0.1 + window.scrollY / 700;

    aboutPoster.style.transform = `scale(${Math.min(scale, maxScale)})`;
}

window.addEventListener("scroll",handleScroll);
 

// Throttling Function pic load on name section
       
    // const throttleFunction=(func, delay)=>{

    //   let prev = 0;
    //   return (...args) => {
    //     let now = new Date().getTime();

    //     if(now - prev> delay){
    //       prev = now;
     
    //       return func(...args); 
    //     }
    //   }
    // }

    // document.querySelector('#throttling').addEventListener("mousemove", throttleFunction((dets)=>{
    //   var div = document.createElement('div');
    //   div.classList.add('imagediv');
    //   div.style.left = dets.clientX+'px';
    //   div.style.top = dets.clientY+'px';
      
    //   var img  = document.createElement('img');
    //   img.setAttribute('src','https://images.pexels.com/photos/12762122/pexels-photo-12762122.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=699.825&fit=crop&h=1133.05');
    //   div.appendChild(img);

    //  document.body.appendChild(div);

    //  gsap.to(img,{
    //     y:"0",
    //     ease:Power1,
    //  })
    //  setTimeout(function(){
    //     div.remove();
    //  }, 2000)

    // }, 400));


// project image slider

    var slideIndex = 1;
    showDivs(slideIndex);

    function plusDivs(n) {
        showDivs(slideIndex += n);
    }

    function showDivs(n) {
        var x = document.getElementsByClassName("mySlides"); 

        if (n >4) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = x.length;
        }
        for (var i = 0; i < 4; i++) {
            x[i].style.display = "none";
        }
        x[slideIndex - 1].style.display = "block";
    }

    var slideIndex2 = 1;
    slideIndex = 1;
    showDivs1(slideIndex2);

    function plusDivs1(n) {
        showDivs1(slideIndex2 += n);
        showDivs(slideIndex);
    }

    function showDivs1(n) {
        var y = document.getElementsByClassName("myContainerSlides");
        if (n > y.length) {
            slideIndex2 = 1;
        }
        if (n < 1) {
            slideIndex2 = y.length;
        }
        for (var i = 0; i < y.length; i++) {
            y[i].style.display = "none";
        }
        y[slideIndex2 - 1].style.display = "block";
    }

// image slider end



// rotaing eye animation

let rotatingDivs = document.getElementsByClassName('rotation');

// Iterate through each element in the collection


window.addEventListener("mousemove",function(e){
   let mouseX = e.clientX;
   let mouseY = e.clientY;

   let deltaX = mouseX - window.innerWidth/2;
   let deltaY = mouseY - window.innerHeight/2;

   var angle = Math.atan2(deltaY,deltaX) * (180/Math.PI);
   angle -= 180;

    for (let i = 0; i < rotatingDivs.length; i++) {
        rotatingDivs[i].style.transform = `rotate(${angle}deg)`;
    }

})


// rotaing eye animation end

// disable scrolling and click

function disableScroll() {
    document.body.style.overflow = 'hidden';
}

// disableScroll();

var posterShowHide = document.querySelector('#poster-section');
function enableScroll() {
    document.body.style.overflow = '';

    var button = document.querySelectorAll('.anchorr');
    

    button.forEach(function(element) {
        element.classList.remove("myLink");
    });
    // window.alert("Now you can able to scroll"); 
    showFlashMessage("✅ Now you can ready to scroll.."); 
}

document.addEventListener('DOMContentLoaded', function() {
    // Code to run after the DOM has loaded

    // Check if the page is being refreshed
    if (performance.navigation.type === 1) {
        // Redirect to the home page
        window.location.href = "/";
    }
});


function showFlashMessage(message) {
    const flashMessage = document.getElementById('flash-message');
    
    // Set the message text
    flashMessage.textContent = message;

    // Show the flash message
    flashMessage.style.display = 'block';

    // Hide the flash message after 3 seconds (adjust the duration as needed)
    setTimeout(() => {
        flashMessage.style.display = 'none';
        posterShowHide.style.display="none";
    }, 2000);
}


    
