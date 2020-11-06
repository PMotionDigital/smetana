const sortingButtons = document.querySelectorAll('button[data-sorting]');

const clickHandler = (button, sortingItem) => {
    button.innerHTML = sortingItem.getAttribute('data-sorting-name');
    count += 1;
    console.log(count);
};

// Открытие и закрытие сортировки
let count = 0;
for (let i = 0; i < sortingButtons.length; i++) {
    const button = sortingButtons[i];
    const sorting = button.closest('div.section-head').querySelector('div[data-sorting]');
    const sortQueries = sorting.querySelectorAll('[data-sorting-name]');

    const sortHandler = (e) => {
        e.preventDefault();
        button.innerHTML = e.target.getAttribute('data-sorting-name');
        if (sorting.querySelector('.sorting_item--current')) {
            sorting.querySelector('.sorting_item--current').classList.remove('sorting_item--current');
        }
        e.target.classList.add('sorting_item--current');
    };
    button.addEventListener('click', (evt) => {
        evt.preventDefault();
        button.classList.toggle('button-sorting--active');
        sorting.classList.toggle('sorting--opened');
    });

    sortQueries.forEach((query) => {
        query.addEventListener('click', sortHandler, false);
    });


    // Закрытие сортировки при клике вне элемента

    document.addEventListener('click', (evt) => {
        const target = evt.target;
        const activeButton = target === button;
        const blockSorting = target === sorting || target === sorting.contains(target);
        const activeSorting = sorting.classList.contains('sorting--opened');
        if (!activeButton && !blockSorting && activeSorting) {
            button.classList.remove('button-sorting--active');
            sorting.classList.remove('sorting--opened');
        }        
    });
}
