const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
});





const header = document.querySelector("header");
const sectionOne = document.querySelector(".home-intro");


const faders = document.querySelectorAll('.fade-in');
const fadersLong = document.querySelectorAll('.fade-in-long');
const bouncer = document.querySelectorAll('.bounce-in-top');
const blinkIn = document.querySelectorAll('.flicker-in-1');
const slideFromBack = document.querySelectorAll('.slide-in-elliptic-left-back');
const sliders = document.querySelectorAll(".slide-in");

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
    threshold: 0,
    
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

        fadersLong.forEach(faderLong => {
            appearOnScroll.observe(faderLong);
        });

        bouncer.forEach(bouncer => {
            appearOnScroll.observe(bouncer);
        });

        blinkIn.forEach(blinker => {
            appearOnScroll.observe(blinker);
        });

        slideFromBack.forEach(sFb => {
            appearOnScroll.observe(sFb);
        });

        sliders.forEach(slider => {
            appearOnScroll.observe(slider);
        });
        

