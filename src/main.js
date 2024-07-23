document.addEventListener('DOMContentLoaded', function() {
    //button variable
    const buttons = document.querySelectorAll('[data-tab-button]');

    //questions variable
    const questions = document.querySelectorAll('[data-faq-question]');

    //hero section variable
    const heroSection = document.querySelector('.hero');
    //hero height section variable
    const heightHero = heroSection.clientHeight;

    window.addEventListener('scroll', function(){
        const scrollPosition = window.scrollY;

        if(scrollPosition < heightHero) {
            hideHeaderElements();
        } else {
            showHeaderElements();
        }
    })

    //shows section / tabs programming
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function (btn) {
            const targetTab = btn.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id=${targetTab}]`);

            hideTabs();
            tab.classList.add('shows__list--is-active');

            hideBtn();
            btn.target.classList.add('shows__tabs__button--is-active');
        })
    }

    //faq section / toggle programming
    for (let i =0; i < questions.length; i++) {
        questions[i].addEventListener('click', openCloseAnswer);
    }
})

function hideHeaderElements() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function showHeaderElements() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

//open and close function / faq
function openCloseAnswer(element) {
    const question = 'faq__questions__item--is-open';
    const parentElement =  element.target.parentNode;

    parentElement.classList.toggle(question);
}

//hide button function / tab / shows
function hideBtn() {
    const buttons = document.querySelectorAll('[data-tab-button');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

//hide tabs function / tab / shows
function hideTabs() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}