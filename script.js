const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
});





const header = document.querySelector("header");
const sectionOne = document.querySelector(".home-intro");


const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll(".slide-in")

const sectionOneOptions = {
    rootMargin: "200px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver) {entries.forEach(entry => {
       if(!entry.isIntersecting) {
           header.classList.add("nav-scrolled");
       } else {
           header.classList.remove("nav-scrolled");
       }
    });
}, sectionOneOptions);

sectionOneObserver.observe(sectionOne);






const appearOptions = {
    threshold: 0
};

const appearOnScroll = new IntersectionObserver(
    function(entries, 
        appearOnScroll) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    return;
                } else {
                    entry.target.classList.add('appear');
                    appearOnScroll.unobserve(entry.target);
                }
            });
        }, appearOptions);

      

        faders.forEach(fader => {
            appearOnScroll.observe(fader);
        });

        sliders.forEach(slider => {
            appearOnScroll.observe(slider);
        });
        


        var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}