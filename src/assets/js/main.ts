import './mep';
const Typed = require('typed.js'); // It fails with a TS import

let langpicker = document.getElementsByClassName("language-picker")[0];
let langMenuTrigger = langpicker.getElementsByClassName('lang-trigger')[0];
let langMenu = langpicker.getElementsByTagName('menu')[0];

// insert new variable for toggling mobile menu
let mobileMenuTrigger = document.getElementById("#mobile-menu-trigger");
let nav = document.getElementById("#nav");

let langMenuIsOpen = false;
let mobileMenuIsOpen = false;

function toggleLangMenu () {
    langpicker.classList.toggle('open');
    langMenu.classList.toggle('hidden');
    langMenuIsOpen = langMenuIsOpen ? false : true;
}

function toggleMobileMenu () {
    nav.classList.toggle('hidden');
    mobileMenuIsOpen = mobileMenuIsOpen ? false : true;
}

langMenuTrigger.addEventListener('click', () => {
    toggleLangMenu();
    if (mobileMenuIsOpen) {
        toggleMobileMenu();
    }
});


// add event listener for toggling mobile menu
mobileMenuTrigger.addEventListener('click', () => {
    toggleMobileMenu();
    if (langMenuIsOpen) {
        toggleLangMenu();
    }
});

// it contains "the" for SEO, remove it as it messes up typed.js
document.getElementById('head-typer').innerHTML = "";
new Typed('#head-typer', {
    strings: ['the', 'your', 'our', 'her', 'his', 'their'],
    typeSpeed: 130,
    backSpeed: 80,
    loop: true,
    smartBackspace: false,
    shuffle: true,
    backDelay: 1400,
})

/*
    Twitter Stuff
*/
function showTweet(interval) {
    let tweets = Array.from(document.querySelectorAll('.section-twitter>.tweet-container:not(.fade)'));
    if(tweets.length === 0) {
        clearInterval(interval);
    } else {
        let tweet = tweets[0];
        tweet.classList.add("fade");
        tweet.classList.remove("hidden");
        let twitterSection = document.getElementsByClassName("section-twitter");
        twitterSection[0].scrollTop = twitterSection[0].scrollHeight;
    }

}
showTweet(null);
var fadeInterval = setInterval(function() { showTweet(fadeInterval) }, 60000);