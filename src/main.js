document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');

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

    for (let i =0; i < questions.length; i++) {
        questions[i].addEventListener('click', openCloseAnswer);
    }
})

function openCloseAnswer(element) {
    const question = 'faq__questions__item--is-open';
    const parentElement =  element.target.parentNode;

    parentElement.classList.toggle(question);
}

function hideBtn() {
    const buttons = document.querySelectorAll('[data-tab-button');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

function hideTabs() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}