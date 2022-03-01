function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en', 
        includedLanguages: 'ar,zh-CN,zh-TW,en,fr,de,hi,id,it,ja,ko,pt,es,tr,vi,ru,tl,bn', 
        autoDisplay: false
    }, 'google_translate_element');
}

function updateTrans() {
    document.querySelector('.menu2').setAttribute(
        "data-text", document.querySelector('.menu2').innerText)
    document.querySelector('.menu3').setAttribute(
        "data-text", document.querySelector('.menu3').innerText)
    document.querySelector('.menu4').setAttribute(
        "data-text", document.querySelector('.menu4').innerText)
    document.querySelector('.menu5').setAttribute(
        "data-text", document.querySelector('.menu5').innerText)
    document.querySelector('.menu6').setAttribute(
        "data-text", document.querySelector('.menu6').innerText)
    document.querySelector('.menu7').setAttribute(
        "data-text", document.querySelector('.menu7').innerText)
    document.querySelector('.menu8').setAttribute(
        "data-text", document.querySelector('.menu8').innerText.slice(0,-1))
    document.querySelector('.mercy').setAttribute(
        "data-text", document.querySelector('.mercytrans').innerText)
}

function trans(a) {
    var selectField = document.querySelector("#google_translate_element select");
    for(var i=0; i < selectField.children.length; i++){
        var option = selectField.children[i]
        if(option.value == a){
            selectField.selectedIndex = i
            selectField.dispatchEvent(new Event('change'))
            setTimeout(updateTrans, 1000);
            break;
        }
    }
}

const menuBtn = document.querySelector(".menu-btn")
const mobNav = document.querySelector(".mob-nav")
let menuOpen = false
menuBtn.addEventListener("click", () => {
    if(!menuOpen) {
        menuBtn.classList.add("open")
        mobNav.classList.add("menu-open")
        menuOpen = true
    } else {
        menuBtn.classList.remove("open")
        mobNav.classList.remove("menu-open")
        menuOpen = false
    }
});

const translateBtn = document.querySelector(".mob-translate")
const mobTranslate = document.querySelector(".translate-drop")
let translateOpen = false
translateBtn.addEventListener("click", () => {
    if(!translateOpen) {
        mobTranslate.classList.add("translate-show")
        translateOpen = true
    } else {
        mobTranslate.classList.remove("translate-show")
        translateOpen = false
    }
});
mobTranslate.addEventListener("click", () => {
    if(translateOpen) {
        mobTranslate.classList.remove("translate-show")
        translateOpen = false
    }
});

function createDateAsUTC(date) {
    return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds()))
}

(function () {
    let e = createDateAsUTC(new Date("february 26, 2022 18:00:00"))
    const t = new Date(e).getTime(),
    o = setInterval(function () {
        const e = new Date().getTime(),
        n = t - e;
        (document.getElementById("days").innerText = Math.floor(n / 864e5)),
        (document.getElementById("hours").innerText = Math.floor(
            (n % 864e5) / 36e5
        )),
        (document.getElementById("minutes").innerText = Math.floor(
            (n % 36e5) / 6e4
        )),
        (document.getElementById("seconds").innerText = Math.floor(
            (n % 6e4) / 1e3
        )),
        n < 0 &&
            ((document.getElementById("presale-counter").style.display =
            "none"),
            clearInterval(o))
    }, 1000);
})();

function scrollFunction() {
    if(document.body.scrollTop > 140 || document.documentElement.scrollTop > 140) {
        myButton.classList.add("showBtn")
        if (viewportWidth > 1200) {
            menuBtn.classList.add("show-menu-btn")
            translateBtn.classList.add("show-mob-translate")
        }
    }
    else {
        myButton.classList.remove("showBtn")
        if (viewportWidth > 1200) {
            mobTranslate.classList.remove("translate-show")
            mobNav.classList.remove("menu-open")
            menuBtn.classList.remove("show-menu-btn")
            if(menuOpen) menuOpen = false
            menuBtn.classList.remove("open")
            mobNav.classList.remove("menu-open")
            translateBtn.classList.remove("show-mob-translate")
            if(translateOpen) translateOpen = false
        }
    }
}
function topFunction() {
    (document.body.scrollTop = 0), (document.documentElement.scrollTop = 0)
}

(myButton = document.querySelector(".topBtn")),
(window.onscroll = function () {
    scrollFunction()
});

options = { root: null, rootMargin: "0px", threshold: 0.15 }

function callback(e, t) {
    e.forEach((e) => {
        if(e.isIntersecting) {
            t.unobserve(e.target)
            if (e.target.id == "earn")
                e.target.style.animation = "shrink 1s linear"
            else if (e.target.id == "nft-cont") {
                document.querySelector('.nft-left').style.animation = "door-left 1.2s linear"
                document.querySelector('.nft-right').style.animation = "door-right 1.2s linear"
            }
            else if (e.target.id == "events-cont") {
                document.querySelector('.events-left').style.animation = "slide-top 1s linear"
                document.querySelector('.events-center').style.animation = "slide-down 1s linear"
                document.querySelector('.events-right').style.animation = "slide-top 1s linear"
            }
            else if (e.target.id == "tokenomics")
                document.querySelector('.chart').style.animation = "chart 1.6s ease"
            else if (e.target.classList.contains("roadmap-cont")) {
                if (viewportWidth > 1200) {
                    document.querySelector('.roadmap').style.animation = "slide-left 1.6s linear"
                    document.querySelector('.price').style.animation = "slide-right 1.6s linear"
                } else {
                    document.querySelector('.roadmap').style.animation = "slide-top 1.6s linear"
                    document.querySelector('.price').style.animation = "slide-bottom 1.6s linear"
                }
            }
            else if (e.target.classList.contains("presale"))
                document.querySelector('#presale-counter').style.animation = "shrink 1.8s linear"
        }
    });
}

let viewportWidth = window.innerWidth || document.documentElement.clientWidth;
const obs = new IntersectionObserver(callback, options);
obs.observe(document.querySelector('#earn'))
obs.observe(document.querySelector('#nft-cont'))
obs.observe(document.querySelector('#tokenomics'))
obs.observe(document.querySelector('#events-cont'))
obs.observe(document.querySelector('.roadmap-cont'))
obs.observe(document.querySelector('.presale'))

const vsLeft = document.querySelector('#vs-left');
const vsRight = document.querySelector('#vs-right');
vsLeft.addEventListener('mouseover', function() {
    vsRight.classList.add('vs-fade')
});
vsLeft.addEventListener('mouseout', function() {
    vsRight.classList.remove('vs-fade')
});
vsRight.addEventListener('mouseover', function() {
    vsLeft.classList.add('vs-fade')
});
vsRight.addEventListener('mouseout', function() {
    vsLeft.classList.remove('vs-fade')
});

window.onload = () => {
    document.querySelector('.loader-cont').classList.add('hide-loader')
    document.body.style.height = 'fit-content'
    document.querySelector('.logo').style.animation = "slide-top 1.2s ease"
    document.querySelector('.logo-moon').style.animation = "moon 2s ease"
    vsLeft.style.animation = "slide-left 1.2s ease"
    vsRight.style.animation = "slide-right 1.2s ease"
    setTimeout(updateTrans, 1000);
}
