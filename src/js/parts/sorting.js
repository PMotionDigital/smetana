const sortingButtons = document.querySelectorAll('button[data-sorting]');

for (let i = 0; i < sortingButtons.length; i++) {
    const button = sortingButtons[i];

    button.addEventListener('click', (evt) => {
        evt.preventDefault();
        button.classList.add('button-sorting--active');
        //button.closest('div[data-sorting]').classList.add('sorting--opened');
        console.log(button.closest('div[data-sorting]'));
    })
}