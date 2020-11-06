import $, { get } from 'jquery';
import { doc } from 'prettier';
const expandButtons = document.querySelectorAll('[data-expand]');
const letterButton = $('button[data-letter]');


const getTezaurus = (letter, action) => {
    $.ajax({
        url: `${window.location.origin}/wp-admin/admin-ajax.php`,
        method: 'GET',
        cahce: false,
        data: {
            action: action,
            letter: letter
        },
        beforeSend: () => {
            console.log('ушел запросичек');
        },
        success: (data) => {
            const response = JSON.parse(data);
            console.log(response); 
            $('.changable-container').html(response.html);
        }
    });
};

letterButton.on('click', (evt) => {
    evt.preventDefault();
    const target = $(evt.currentTarget);
    const letterItem = target.data('letter');

    
    $('.letter.letter--current').removeClass('letter--current');
    target.addClass('letter--current');
    getTezaurus(letterItem, 'search_by_letter');
});

// $(document).on('click', '[data-word-id]', (e) => {
//     e.preventDefault();
//     const wordId = $(e.currentTarget).data('word-id');
//     getTezaurus(wordId, 'get_single_word');
// });


