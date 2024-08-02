document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    const accordionButtons = document.querySelectorAll('.accordion-button');
    const accordionContents = document.querySelectorAll('.accordion-content');

    function deactivateAllTabs() {
        tabButtons.forEach(button => button.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
    }

    function deactivateAllAccordions() {
        accordionButtons.forEach(button => button.classList.remove('active'));
        accordionContents.forEach(content => content.classList.remove('active'));
    }

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const target = document.querySelector(button.getAttribute('data-target'));
            deactivateAllTabs();
            button.classList.add('active');
            target.classList.add('active');
        });
    });

    accordionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const target = document.querySelector(button.getAttribute('data-target'));
            if (button.classList.contains('active')) {
                button.classList.remove('active');
                target.classList.remove('active');
            } else {
                deactivateAllAccordions();
                button.classList.add('active');
                target.classList.add('active');
            }
        });
    });

    // Open the first tab and accordion by default
    tabButtons[0].classList.add('active');
    tabContents[0].classList.add('active');
    accordionButtons[0].classList.add('active');
    accordionContents[0].classList.add('active');
});